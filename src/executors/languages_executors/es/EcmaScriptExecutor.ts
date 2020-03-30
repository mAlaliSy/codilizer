import EvaluateExpressionAction from "../../actions/EvaluateExpressionAction";
import Action from "../../actions/Action";

import Parser from "./parser/ECMAScriptParser";

import Executor from "../../Executor";
import SymbolTable from "./SymbolTable";

import ErrorHandler from "../../errorhandler/ErrorHandler";
import ExecutionError from "../../errorhandler/Error";
import AssignmentAction from "../../actions/AssignmentAction";
import VarDecAction from "../../actions/VarDecAction";
import PrintAction from "../../actions/PrintAction";
import DeleteVariableAction from "../../actions/DeleteVariableAction";
import VarInitAction from "../../actions/VarInitAction";
import UnaryIncDecAction from "../../actions/UnaryIncDecAction";

const antlr4 = require('antlr4/index');
const ECMAScriptLexer = require("./parser/ECMAScriptLexer");
const ECMAScriptVisitor = require("./parser/ECMAScriptVisitor");

enum ExpressionResultType {
    VARIABLE,
    VALUE
}

class ExpressionResult {
    type: ExpressionResultType;
    value: any;

    constructor(type: ExpressionResultType, value: any) {
        this.type = type;
        this.value = value;
    }
}

export default class JavaScriptExecutor extends ECMAScriptVisitor.ECMAScriptVisitor implements Executor {
    lexer: any;
    parser: any;
    actions: any = [];
    source: string;
    globalSymbolTable: SymbolTable;
    activeSymbolTable: SymbolTable;
    errorHandler: ErrorHandler;


    constructor(source: string, errorHandler: ErrorHandler) {
        super();
        this.source = source;
        this.globalSymbolTable = new SymbolTable();
        this.activeSymbolTable = this.globalSymbolTable;

        this.errorHandler = errorHandler;

        let inputStream = new antlr4.InputStream(this.source);
        this.lexer = new ECMAScriptLexer.ECMAScriptLexer(inputStream);

        let tokenStream = new antlr4.CommonTokenStream(this.lexer);
        this.parser = new Parser.ECMAScriptParser(tokenStream);
        this.parser.buildParseTrees = true;
    }

    executeAll(): Array<Action> {
        this.actions = new Array<Action>();
        this.visitStatementList(this.parser.statementList());
        return this.actions;
    }

    getVarValueOrError(name: string) {
        let varVal = this.activeSymbolTable.getValue(name);
        if (varVal === undefined) {
            this.errorHandler.handleError(new ExecutionError(true, `${name} is not defined`));
            return;
        }
        return varVal;
    }

    getValueOfExpressionResult(expResult: ExpressionResult) {
        if (expResult.type === ExpressionResultType.VALUE) return expResult.value;
        return this.getVarValueOrError(expResult.value).value;
    }

    getExpressionValue(ctx: any) {
        let expResult = this.visitSingleExpression(ctx);
        return this.getValueOfExpressionResult(expResult);
    }

    visitBinary(ctx: any, op: string): ExpressionResult {
        const leftExp = this.visitSingleExpression(ctx.singleExpression()[0]);
        const rightExp = this.visitSingleExpression(ctx.singleExpression()[1]);
        let left, right;
        if (leftExp.type === ExpressionResultType.VARIABLE) {
            left = this.activeSymbolTable.getValue(leftExp.value);
            if (left === undefined) this.errorHandler.handleError(new ExecutionError(true, `${leftExp.value} is not defined`))
            left = left.value;
        } else {
            left = leftExp.value;
        }

        if (rightExp.type === ExpressionResultType.VARIABLE) {
            right = this.activeSymbolTable.getValue(rightExp.value);
            if (right === undefined) this.errorHandler.handleError(new ExecutionError(true, `${rightExp.value} is not defined`));
            right = right.value;
        } else {
            right = rightExp.value;
        }


        let result;
        switch (op) {
            case '+':
                result = left + right;
                break;
            case '-':
                result = left - right;
                break;
            case '*':
                result = left * right;
                break;
            case '/':
                result = left / right;
                break;
            case '%':
                result = left % right;
                break;
            case '**':
                result = left ** right;
                break;
            case '>':
                result = left > right;
                break;
            case '>=':
                result = left >= right;
                break;
            case '<':
                result = left < right;
                break;
            case '<=':
                result = left <= right;
                break;
            case '==':
                result = left == right;
                break;
            case '!=':
                result = left != right;
                break;
            case '&&':
                result = left && right;
                break;
            case '||':
                result = left || right;
                break;
            case '|':
                result = left | right;
                break;
            case '&':
                result = left & right;
                break;
            case '^':
                result = left ^ right;
                break;
            case '<<':
                result = left << right;
                break;
            case '>>':
                result = left >> right;
                break;
            case '>>>':
                result = left >>> right;
                break;
        }
        this.actions.push(new EvaluateExpressionAction(ctx.start.line, left + " " + op + " " + right, result));
        return new ExpressionResult(ExpressionResultType.VALUE, result);
    }

    visitAdditiveExpression(ctx: any): any {
        return this.visitBinary(ctx, ctx.Plus() ? '+' : '-')
    }

    visitBitAndExpression(ctx: any): any {
        return this.visitBinary(ctx, '&');
    }

    visitBitOrExpression(ctx: any): any {
        return this.visitBinary(ctx, '|');
    }

    visitBitXOrExpression(ctx: any): any {
        return this.visitBinary(ctx, '^');
    }


    visitEqualityExpression(ctx: any): any {
        return this.visitBinary(ctx, ctx.Equals() ? '==' : '!=');
    }

    visitLogicalAndExpression(ctx: any): any {
        return this.visitBinary(ctx, '&&');
    }


    visitLogicalOrExpression(ctx: any): any {
        return this.visitBinary(ctx, '||');
    }

    visitMultiplicativeExpression(ctx: any): any {
        let op;
        if (ctx.Multiply())
            op = "*";
        else if (ctx.Divide())
            op = "/";
        else
            op = "%";
        return this.visitBinary(ctx, op);
    }

    visitParenthesizedExpression(ctx: any): any {
        return this.visitSingleExpression(ctx.expressionSequence().singleExpression()[0])
    }

    visitBitShiftExpression(ctx: any): any {
        let op;
        if (ctx.LeftShiftArithmetic())
            op = "<<";
        else if (ctx.RightShiftArithmetic()) {
            op = ">>";
        } else
            op = ">>>";

        return this.visitBinary(ctx, op);
    }


    visitRelationalExpression(ctx: any) {
        let op;
        if (ctx.LessThan())
            op = "<";
        else if (ctx.LessThanEquals())
            op = "<=";
        else if (ctx.MoreThan())
            op = ">";
        else op = ">=";
        return this.visitBinary(ctx, op);
    }


    visitLiteral(ctx: any): any {
        if (ctx.NullLiteral()) return null;
        else if (ctx.BooleanLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, ctx.BooleanLiteral()?.getText() === 'true');
        else if (ctx.StringLiteral()) {
            let str = ctx.StringLiteral()?.getText();
            str = str.substring(1, str.length - 1);
            return new ExpressionResult(ExpressionResultType.VALUE, str);
        } else if (ctx.numericLiteral()) return this.visitNumericLiteral(ctx.numericLiteral()!!);
    }

    visitNumericLiteral(ctx: any): any {
        if (ctx.DecimalLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, parseFloat(ctx.DecimalLiteral()?.getText()!!));
        else if (ctx.HexIntegerLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, parseInt(ctx.HexIntegerLiteral()?.getText()!!, 16));
        else if (ctx.OctalIntegerLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, parseInt(ctx.OctalIntegerLiteral()?.getText()!!, 8));
    }

    visitLiteralExpression(ctx: any): any {
        return this.visitLiteral(ctx.literal());
    }

    visitNotExpression(ctx: any): any {
        let expResult = this.visitSingleExpression(ctx.singleExpression());
        let value;
        if (expResult.type === ExpressionResultType.VARIABLE) {
            value = this.getVarValueOrError(expResult.value);
        } else {
            value = expResult.value;
        }
        let result = !value;
        this.actions.push(new EvaluateExpressionAction(ctx.start.line, "!" + expResult.value, result));
        return new ExpressionResult(ExpressionResultType.VALUE, result);
    }

    visitSingleExpression(ctx: any): ExpressionResult {
        if (ctx instanceof Parser.ECMAScriptParser.MultiplicativeExpressionContext) return this.visitMultiplicativeExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.AdditiveExpressionContext) return this.visitAdditiveExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.BitShiftExpressionContext) return this.visitBitShiftExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.RelationalExpressionContext) return this.visitRelationalExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.EqualityExpressionContext) return this.visitEqualityExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.BitAndExpressionContext) return this.visitBitAndExpression(ctx)
        else if (ctx instanceof Parser.ECMAScriptParser.BitXOrExpressionContext) return this.visitBitXOrExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.BitOrExpressionContext) return this.visitBitOrExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.LogicalAndExpressionContext) return this.visitLogicalAndExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.LogicalOrExpressionContext) return this.visitLogicalOrExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.LiteralExpressionContext) return this.visitLiteralExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.EqualityExpressionContext) return this.visitEqualityExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.AssignmentExpressionContext) return this.visitAssignmentExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.IdentifierExpressionContext) return this.visitIdentifierExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.ArgumentsExpressionContext) return this.visitArgumentsExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.MemberDotExpressionContext) return this.visitMemberDotExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.PostDecreaseExpressionContext) return this.visitPostDecreaseExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.PostIncrementExpressionContext) return this.visitPostIncrementExpression(ctx);
        else {
            console.log(ctx);
            throw new Error("Unhandled expression type: " + typeof (ctx));
        }
    }

    evaluateLogicalExpressionSequence(ctx: any): boolean {
        let expressions = ctx.singleExpression();
        let evaluatTrue = false;
        expressions.forEach((exp: any) => evaluatTrue = evaluatTrue || this.visitSingleExpression(exp).value);
        return evaluatTrue;
    }

    visitStatement(ctx: any): any {
        if (ctx.expressionStatement()) {
            this.visitExpressionStatement(ctx.expressionStatement()!!);
        } else if (ctx.block()) {
            this.visitBlock(ctx.block());
        } else if (ctx.ifStatement()) {
            this.visitIfStatement(ctx.ifStatement());
        } else if (ctx.iterationStatement()) {
            this.visitIterationStatement(ctx.iterationStatement()!!);
        } else if (ctx.variableStatement()) {
            this.visitVariableStatement(ctx.variableStatement());
        } else if (ctx.emptyStatement()) {
            // DO NOTHING
        } else {
            this.errorHandler.handleError(new ExecutionError(false, "Unsupported statement at line " + ctx.start.line));
        }
    }

    visitExpressionStatement(ctx: any): any {
        if (ctx.expressionSequence()) {
            this.visitExpressionSequence(ctx.expressionSequence()!!);
        }
    }

    visitExpressionSequence(ctx: any): ExpressionResult {
        let expressions = ctx.singleExpression();
        if (!expressions) return new ExpressionResult(ExpressionResultType.VALUE, undefined);

        let returnVal = this.visitSingleExpression(expressions[0]);
        for (let i = 1; i < expressions.length; i++) {
            this.visitSingleExpression(expressions[i]);
        }
        return returnVal;
    }

    visitAssignmentExpression(ctx: any): any {
        let expr = this.visitSingleExpression(ctx.singleExpression());
        if (expr.type !== ExpressionResultType.VARIABLE) {
            this.errorHandler.handleError(new ExecutionError(true, "Only variables are assignable"));
            return;
        }
        let valueExp = this.visitExpressionSequence(ctx.expressionSequence());
        let value;
        if (valueExp.type === ExpressionResultType.VARIABLE) {
            value = this.getVarValueOrError(valueExp.value);
        } else {
            value = valueExp.value;
        }
        this.activeSymbolTable.updateOrCreate(expr.value, value);
        this.actions.push(new AssignmentAction(ctx.start.line, expr.value, value));
        return new ExpressionResult(ExpressionResultType.VALUE, value);
    }

    visitIdentifierExpression(ctx: any): any {
        return new ExpressionResult(ExpressionResultType.VARIABLE, ctx.Identifier().getText());
    }


    visitBitNotExpression(ctx: any): any {
        let exprResult = this.visitSingleExpression(ctx.singleExpression());
        return ~exprResult;
    }

    visitStatementList(ctx: any): any {
        let statements = ctx.statement();
        if (statements) {
            statements.forEach(this.visitStatement.bind(this));
        }
    }

    addVariablesDeleteActions(lineNumber: number) {
        Object.keys(this.activeSymbolTable.getDirectEntries()).forEach(varName => {
            this.actions.push(new DeleteVariableAction(lineNumber, varName));
        })
    }

    visitBlock(ctx: any): any {
        this.activeSymbolTable = new SymbolTable(this.activeSymbolTable);
        let statementList = ctx.statementList();
        if (statementList)
            this.visitStatementList(statementList);
        // this.addVariablesDeleteActions(ctx.CloseBrace().line);
        this.activeSymbolTable = this.activeSymbolTable.parent!!;
    }

    visitIfStatement(ctx: any): any {
        this.actions.push(new Action(ctx.start.line, "Evaluating if condition"));
        if (this.evaluateLogicalExpressionSequence(ctx.expressionSequence())) {
            if (ctx.statement().length > 0)
                this.visitStatement(ctx.statement()[0])
        } else {
            if (ctx.statement().length > 1)
                this.visitStatement(ctx.statement()[1]);
        }
    }


    visitVariableDeclaration(ctx: any): any {
        let varName = ctx.Identifier().getText();
        this.actions.push(new VarDecAction(ctx.start.line, varName));
        let value = undefined;
        if (ctx.initialiser()) {
            value = this.getExpressionValue(ctx.initialiser().singleExpression());
            this.actions.push(new VarInitAction(ctx.start.line, varName, value));
        }
        this.activeSymbolTable.defineVariable(varName, value);
    }

    visitVariableDeclarationList(ctx: any): any {
        ctx.variableDeclaration().forEach(this.visitVariableDeclaration.bind(this))
    }

    visitVariableStatement(ctx: any): any {
        this.visitVariableDeclarationList(ctx.variableDeclarationList());
    }

    visitWhileStatement(ctx: any): any {
        this.actions.push(new Action(ctx.start.line, "Executing while statement"));

        while (this.evaluateLogicalExpressionSequence(ctx.expressionSequence())) {
            this.visitStatement(ctx.statement());
            this.actions.push(new Action(ctx.expressionSequence().start.line, "Evaluating while condition"));
        }
    }

    visitForVarStatement(ctx: any): any {
        this.actions.push(new Action(ctx.start.line, "Executing for statement"));
        // this.activeSymbolTable = new SymbolTable(this.activeSymbolTable);
        this.visitVariableDeclarationList(ctx.variableDeclarationList());
        while (true) {
            this.actions.push(new Action(ctx.expressionSequence()[0].start.line, "Evaluating for condition"));
            if (!this.evaluateLogicalExpressionSequence(ctx.expressionSequence()[0]))
                break;

            this.visitStatement(ctx.statement());

            this.actions.push(new Action(ctx.start.line, "Executing increment/decrement of for loop"));
            this.visitExpressionSequence(ctx.expressionSequence()[1])
        }
    }


    visitForStatement(ctx: any): any {
        this.actions.push(new Action(ctx.start.line, "Executing for statement"));
        this.visitExpressionSequence(ctx.expressionSequence()[0]);
        while (true) {
            this.actions.push(new Action(ctx.expressionSequence()[0].start.line, "Evaluating for condition"));
            if (!this.evaluateLogicalExpressionSequence(ctx.expressionSequence()[1]))
                break;

            this.visitStatement(ctx.statement());

            this.actions.push(new Action(ctx.start.line, "Executing increment/decrement of for loop"));
            this.visitExpressionSequence(ctx.expressionSequence()[2])
        }
    }


    private visitIterationStatement(iterationStatement: any) {
        if (iterationStatement instanceof Parser.ECMAScriptParser.WhileStatementContext) {
            this.visitWhileStatement(iterationStatement);
        } else if (iterationStatement instanceof Parser.ECMAScriptParser.ForVarStatementContext) {
            this.visitForVarStatement(iterationStatement);
        } else if (iterationStatement instanceof Parser.ECMAScriptParser.ForStatementContext) {
            this.visitForStatement(iterationStatement)
        } else if (iterationStatement instanceof Parser.ECMAScriptParser.ForVarInStatementContext) {

        } else if (iterationStatement instanceof Parser.ECMAScriptParser.ForInStatementContext) {

        }
    }

    visitMemberDotExpression(ctx: any): any {
        if (!ctx.singleExpression || ctx.singleExpression().Identifier) {
            this.errorHandler.handleError(new ExecutionError(true, "Only logging functions/member calls are supported"));
            return;
        }
        let object = ctx.singleExpression().Identifier().getText();
        let identifierName = ctx.identifierName().Identifier().getText();
        if (object !== "console" || identifierName !== "log") {
            this.errorHandler.handleError(new ExecutionError(true, "Only logging functions/member calls are supported"));
            return;
        }

    }

    visitArgumentsExpression(ctx: any): any {
        this.visitMemberDotExpression(ctx.singleExpression());
        let argumentValues: any[] = [];
        ctx.arguments().argumentList()?.singleExpression().forEach((exp: any) => {
            argumentValues.push(this.getExpressionValue(exp));
        });
        this.actions.push(new PrintAction(ctx.start.line, argumentValues));
    }
    visitPostDecreaseExpression(ctx:any) : ExpressionResult {
        let expRes = this.visitSingleExpression(ctx.singleExpression());
        if(expRes.type !== ExpressionResultType.VARIABLE){
            this.errorHandler.handleError(new ExecutionError(true, "Only variables can be used with postfix decreasement!"));
            throw new Error();
        }
        let val = this.getVarValueOrError(expRes.value).value;
        this.activeSymbolTable.updateOrCreate(expRes.value, val - 1);
        this.actions.push(new UnaryIncDecAction(ctx.start.line, expRes.value, false, false));
        return new ExpressionResult(ExpressionResultType.VALUE, val);
    }
    visitPostIncrementExpression(ctx: any) : ExpressionResult {
        let expRes = this.visitSingleExpression(ctx.singleExpression());
        if(expRes.type !== ExpressionResultType.VARIABLE){
            this.errorHandler.handleError(new ExecutionError(true, "Only variables can be used with postfix increasement!"));
            throw new Error();
        }
        let val = this.getVarValueOrError(expRes.value).value;
        this.activeSymbolTable.updateOrCreate(expRes.value, val + 1);
        this.actions.push(new UnaryIncDecAction(ctx.start.line, expRes.value, false, false));
        return new ExpressionResult(ExpressionResultType.VALUE, val);
    }
    visitPreDecreaseExpression(ctx: any) : any {}
    visitPreIncrementExpression(ctx: any) : any {}

    // visitArgumentList(ctx: ArgumentListContext) : any {}
    // visitArguments(ctx: ArgumentsContext) : any {}

    // visitForVarInStatement(ctx: ForVarInStatementContext) : any {}
    // visitIdentifierName(ctx: IdentifierNameContext) : any {}

    // visitAssignmentOperatorExpression(ctx: AssignmentOperatorExpressionContext) : any {
    //     ctx.assignmentOperator().
    // }


    // visitArrayLiteral(ctx: ArrayLiteralContext) : any {}
    // visitArrayLiteralExpression(ctx: ArrayLiteralExpressionContext) : any {}
    // visitBreakStatement(ctx: BreakStatementContext) : any {}
    // visitCaseBlock(ctx: CaseBlockContext) : any {}
    // visitCaseClause(ctx: CaseClauseContext) : any {}
    // visitCaseClauses(ctx: CaseClausesContext) : any {}
    // visitCatchProduction(ctx: CatchProductionContext) : any {}
    // visitContinueStatement(ctx: ContinueStatementContext) : any {}
    // visitDebuggerStatement(ctx: DebuggerStatementContext) : any {}
    // visitDefaultClause(ctx: DefaultClauseContext) : any {}
    // visitDeleteExpression(ctx: DeleteExpressionContext) : any {}
    // visitDoStatement(ctx: DoStatementContext) : any {}
    // visitElementList(ctx: ElementListContext) : any {}
    // visitElision(ctx: ElisionContext) : any {}
    // visitEmptyStatement(ctx: EmptyStatementContext) : any {}
    // visitEof(ctx: EofContext) : any {}
    // visitEos(ctx: EosContext) : any {}
    // visitFinallyProduction(ctx: FinallyProductionContext) : any {}
    // visitForInStatement(ctx: ForInStatementContext) : any {}
    // visitFormalParameterList(ctx: FormalParameterListContext) : any {}
    // visitFunctionBody(ctx: FunctionBodyContext) : any {}
    // visitFunctionDeclaration(ctx: FunctionDeclarationContext) : any {}
    // visitFunctionExpression(ctx: FunctionExpressionContext) : any {}
    // visitFutureReservedWord(ctx: FutureReservedWordContext) : any {}
    // visitGetter(ctx: GetterContext) : any {}
    // visitInExpression(ctx: InExpressionContext) : any {}
    // visitInitialiser(ctx: InitialiserContext) : any {}
    // visitInstanceofExpression(ctx: InstanceofExpressionContext) : any {}
    // visitKeyword(ctx: KeywordContext) : any {}
    // visitLabelledStatement(ctx: LabelledStatementContext) : any {}
    // visitMemberIndexExpression(ctx: MemberIndexExpressionContext) : any {}
    // visitNewExpression(ctx: NewExpressionContext) : any {}
    // visitObjectLiteral(ctx: ObjectLiteralContext) : any {}
    // visitObjectLiteralExpression(ctx: ObjectLiteralExpressionContext) : any {}
    // visitProgram(ctx: ProgramContext) : any {}
    // visitPropertyAssignment(ctx: PropertyAssignmentContext) : any {}
    // visitPropertyExpressionAssignment(ctx: PropertyExpressionAssignmentContext) : any {}
    // visitPropertyGetter(ctx: PropertyGetterContext) : any {}
    // visitPropertyName(ctx: PropertyNameContext) : any {}
    // visitPropertyNameAndValueList(ctx: PropertyNameAndValueListContext) : any {}
    // visitPropertySetParameterList(ctx: PropertySetParameterListContext) : any {}
    // visitPropertySetter(ctx: PropertySetterContext) : any {}
    // visitReservedWord(ctx: ReservedWordContext) : any {}
    // visitReturnStatement(ctx: ReturnStatementContext) : any {}
    // visitSetter(ctx: SetterContext) : any {}
    // visitSourceElement(ctx: SourceElementContext) : any {}
    // visitSourceElements(ctx: SourceElementsContext) : any {}
    // visitSwitchStatement(ctx: SwitchStatementContext) : any {}
    // visitTernaryExpression(ctx: TernaryExpressionContext) : any {}
    // visitThisExpression(ctx: ThisExpressionContext) : any {}
    // visitThrowStatement(ctx: ThrowStatementContext) : any {}
    // visitTryStatement(ctx: TryStatementContext) : any {}
    // visitTypeofExpression(ctx: TypeofExpressionContext) : any {}
    // visitUnaryMinusExpression(ctx: UnaryMinusExpressionContext) : any {}
    // visitUnaryPlusExpression(ctx: UnaryPlusExpressionContext) : any {}
    // visitVoidExpression(ctx: VoidExpressionContext) : any {}
    // visitWithStatement(ctx: WithStatementContext) : any {}


    visit(tree: any): any {
        return undefined;
    }

    visitChildren(node: any): any {
        return undefined;
    }

    visitErrorNode(node: any): any {
        console.log("Error");
        console.log(node);
        return undefined;
    }

    visitTerminal(node: any): any {
        console.log("Should visit terminal");
        console.log(node);
        return undefined;
    }

}
//
//
// let source = "console.log(4 + 3);";
//
// "var x = 'GREAT!';\n" +
//     "for(var i = 1; i <= 5; i = i + 1){\nconsole.log(x);" +
//     "}";
// let executor = new JavaScriptExecutor(source, new class implements ErrorHandler {
//     handleError(error: ExecutionError): void {
//         console.error(error.message);
//     }
// });
// let result = executor.executeAll();
//