import Action from "../../actions/Action";
import EvaluateExpressionAction from "../../actions/EvaluateExpressionAction";

import Parser from "./parser/ECMAScriptParser";

import Executor from "../../Executor";
import SymbolTable from "./SymbolTable";
import {ECMAScriptVisitor} from "../testts/ECMAScriptVisitor";
import {
    AssignmentExpressionContext,
    AssignmentOperatorExpressionContext,
    BitNotExpressionContext,
    ExpressionSequenceContext,
    ExpressionStatementContext,
    IdentifierExpressionContext,
    IfStatementContext,
    NotExpressionContext,
    StatementContext,
    StatementListContext,
    VariableDeclarationContext,
    VariableDeclarationListContext,
    VariableStatementContext
} from "../testts/ECMAScriptParser";
import ErrorHandler from "../../errorhandler/ErrorHandler";
import ExecutionError from "../../errorhandler/Error";
import AssignmentAction from "../../actions/AssignmentAction";
import VarDecAction from "../../actions/VarDecAction";

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

export default class JavaScriptExecutor extends ECMAScriptVisitor.ECMAScriptVisitor implements ECMAScriptVisitor<any> {
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
        console.log(tokenStream.tokens);
        this.parser = new Parser.ECMAScriptParser(tokenStream);
        this.parser.buildParseTrees = true;
    }

    executeAll(): Array<Action> {
        console.log("Executing all");
        this.actions = new Array<Action>();
        console.log("After creating");
        // this.visitStatementList(this.parser.statementList());
        // let tree = this.parser.parse();
        let result = this.visitStatement(this.parser.statement());
        console.log("Result: " + result);
        console.log("Actions: ", this.actions);
        return this.actions;
        // return this.actions;
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
        return this.getVarValueOrError(expResult.value);
    }

    getExpressionValue(ctx: any) {
        let expResult = this.visitSingleExpression(ctx);
        return this.getValueOfExpressionResult(expResult);
    }

    visitBinary(ctx: any, op: string): ExpressionResult {
        console.log("Evluate binary: op: " + op);
        const leftExp = this.visitSingleExpression(ctx.singleExpression()[0]);
        const rightExp = this.visitSingleExpression(ctx.singleExpression()[1]);
        console.log("Left expr: ", leftExp);
        console.log("Right expr: ", rightExp);
        let left, right;
        if (leftExp.type === ExpressionResultType.VARIABLE) {
            left = this.activeSymbolTable.getValue(leftExp.value);
            console.log("LEFT FROM SYMBOL: ", left);
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

        console.log("Left: ", left);
        console.log("Right: ", right);

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
        else if (ctx.StringLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, ctx.StringLiteral()?.getText());
        else if (ctx.numericLiteral()) return this.visitNumericLiteral(ctx.numericLiteral()!!);
    }

    visitNumericLiteral(ctx: any): any {
        if (ctx.DecimalLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, parseFloat(ctx.DecimalLiteral()?.getText()!!));
        else if (ctx.HexIntegerLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, parseInt(ctx.HexIntegerLiteral()?.getText()!!, 16));
        else if (ctx.OctalIntegerLiteral()) return new ExpressionResult(ExpressionResultType.VALUE, parseInt(ctx.OctalIntegerLiteral()?.getText()!!, 8));
    }

    visitLiteralExpression(ctx: any): any {
        return this.visitLiteral(ctx.literal());
    }

    visitNotExpression(ctx: NotExpressionContext): any {
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
        else {
            console.log(ctx);
            throw new Error("Unhandled expression type: " + typeof (ctx));
        }
    }

    visitStatement(ctx: StatementContext): any {
        if (ctx.expressionStatement()) {
            this.visitExpressionStatement(ctx.expressionStatement()!!);
        } else if (ctx.block()) {
            this.visitBlock(ctx.block());
        } else if (ctx.ifStatement()) {
            this.visitIfStatement(ctx.ifStatement());
        }
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): any {
        if (ctx.expressionSequence()) {
            this.visitExpressionSequence(ctx.expressionSequence()!!);
        }
    }

    visitExpressionSequence(ctx: ExpressionSequenceContext): ExpressionResult {
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

    visitStatementList(ctx: StatementListContext): any {
        let statements = ctx.statement();
        if (statements) {
            statements.forEach(stmt => this.visitStatement(stmt));
        }
    }


    visitBlock(ctx: any): any {
        this.activeSymbolTable = new SymbolTable(this.activeSymbolTable);
        let statementList = ctx.statementList();
        if (statementList)
            this.visitStatementList(statementList);
        this.activeSymbolTable = this.activeSymbolTable.parent!!;
    }

    visitIfStatement(ctx: any): any {
        let expressions = ctx.expressionSequence().singleExpression();
        let evaluatTrue = false;
        expressions.forEach((exp: any) => evaluatTrue = evaluatTrue || this.visitSingleExpression(exp).value);
        if (evaluatTrue) {
            if (ctx.statement().length > 0)
                this.visitStatement(ctx.statement()[0])
        } else {
            if (ctx.statement().length > 1)
                this.visitStatement(ctx.statement()[1]);
        }
    }


    visitVariableDeclaration(ctx: any): any {
        let varName = ctx.Identifier().getText();
        let value = undefined;
        if (ctx.initialiser()) {
            value = this.getExpressionValue(ctx.initialiser().singleExpression());
        }
        this.activeSymbolTable.defineVariable(varName, value);
        this.actions.push(new VarDecAction(varName, value));
    }

    visitVariableDeclarationList(ctx: VariableDeclarationListContext): any {
        ctx.variableDeclaration().forEach(this.visitVariableDeclaration)
    }

    visitVariableStatement(ctx: VariableStatementContext) : any {
        this.visitVariableDeclarationList(ctx.variableDeclarationList());
    }
    // visitWhileStatement(ctx: WhileStatementContext) : any {}


    // visitForStatement(ctx: ForStatementContext) : any {}
    // visitForVarInStatement(ctx: ForVarInStatementContext) : any {}
    // visitForVarStatement(ctx: ForVarStatementContext) : any {}
    // visitIdentifierName(ctx: IdentifierNameContext) : any {}

    // visitAssignmentOperatorExpression(ctx: AssignmentOperatorExpressionContext) : any {
    //     ctx.assignmentOperator().
    // }
    // visitPostDecreaseExpression(ctx: PostDecreaseExpressionContext) : any {}
    // visitPostIncrementExpression(ctx: PostIncrementExpressionContext) : any {}
    // visitPreDecreaseExpression(ctx: PreDecreaseExpressionContext) : any {}
    // visitPreIncrementExpression(ctx: PreIncrementExpressionContext) : any {}

    // visitArgumentList(ctx: ArgumentListContext) : any {}
    // visitArguments(ctx: ArgumentsContext) : any {}
    // visitArgumentsExpression(ctx: ArgumentsExpressionContext) : any {}
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
    // visitIterationStatement(ctx: IterationStatementContext) : any {}
    // visitKeyword(ctx: KeywordContext) : any {}
    // visitLabelledStatement(ctx: LabelledStatementContext) : any {}
    // visitMemberDotExpression(ctx: MemberDotExpressionContext) : any {}
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


let source = "if(10 + 4 < 4)\n{ x = 10; y = 4 + x; z = y * 3; }\nelse{j = 'EVALUATED TO FALSE';}";
let executor = new JavaScriptExecutor(source, new class implements ErrorHandler {
    handleError(error: ExecutionError): void {
        console.error(error.message);
    }
});
let result = executor.executeAll();
