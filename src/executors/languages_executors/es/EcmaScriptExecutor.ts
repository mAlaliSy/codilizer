import Action from "../../actions/Action";
import EvaluateExpressionAction from "../../actions/EvaluateExpressionAction";

import Parser from "./parser/ECMAScriptParser";

import Executor from "../../Executor";

const antlr4 = require('antlr4/index');
const ECMAScriptLexer = require("./parser/ECMAScriptLexer");
const ECMAScriptVisitor = require("./parser/ECMAScriptVisitor");

export default class JavaScriptExecutor extends ECMAScriptVisitor.ECMAScriptVisitor {
    lexer: any;
    parser: any;
    actions: any = [];
    source: string;

    constructor(source: string) {
        super();
        this.source = source;
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
        let result = this.visitSingleExpression(this.parser.singleExpression());
        console.log("Result: " + result);
        console.log("Actions: ", this.actions);
        return this.actions;
        // return this.actions;
    }

    visitBinary(ctx: any, op: string): any {
        console.log("Evluate binary: op: " + op);
        const left = this.visitSingleExpression(ctx.singleExpression()[0]);
        const right = this.visitSingleExpression(ctx.singleExpression()[1]);
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
        return result;
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
        else if (ctx.BooleanLiteral()) return ctx.BooleanLiteral()?.getText() === 'true';
        else if (ctx.StringLiteral()) return ctx.StringLiteral()?.getText();
        else if (ctx.numericLiteral()) return this.visitNumericLiteral(ctx.numericLiteral()!!);
    }
    


    visitNumericLiteral(ctx: any): any {
        if (ctx.DecimalLiteral()) return parseFloat(ctx.DecimalLiteral()?.getText()!!);
        else if (ctx.HexIntegerLiteral()) return parseInt(ctx.HexIntegerLiteral()?.getText()!!, 16);
        else if (ctx.OctalIntegerLiteral()) return parseInt(ctx.OctalIntegerLiteral()?.getText()!!, 8);
    }

    visitLiteralExpression(ctx: any): any {
        return this.visitLiteral(ctx.literal());
    }

    visitSingleExpression(ctx: any): any {
        console.log("Exeuting single expression ");
        if (ctx instanceof Parser.ECMAScriptParser.MultiplicativeExpressionContext) return this.visitMultiplicativeExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.AdditiveExpressionContext) return this.visitAdditiveExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.BitShiftExpressionContext) return this.visitBitShiftExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.RelationalExpressionContext) return this.visitRelationalExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.EqualityExpressionContext) return this.visitEqualityExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.BitAndExpressionContext) return this.visitBitAndExpression(ctx)
        else if(ctx instanceof Parser.ECMAScriptParser.BitXOrExpressionContext) return this.visitBitXOrExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.BitOrExpressionContext) return this.visitBitOrExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.LogicalAndExpressionContext) return this.visitLogicalAndExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.LogicalOrExpressionContext) return this.visitLogicalOrExpression(ctx);
        else if (ctx instanceof Parser.ECMAScriptParser.LiteralExpressionContext) return this.visitLiteralExpression(ctx);
        else if(ctx instanceof Parser.ECMAScriptParser.EqualityExpressionContext) return this.visitEqualityExpression(ctx);
        else {
            throw new Error("Unhandled expression type: " + typeof (ctx));
        }
    }


    visitArgumentsExpression(ctx: any): any {
    }

    visitAssignmentExpression(ctx: any): any {
    }

    visitAssignmentOperator(ctx: any): any {
    }

    visitAssignmentOperatorExpression(ctx: any): any {
    }

    visitBlock(ctx: any): any {
    }

    visitBreakStatement(ctx: any): any {
    }

    visitContinueStatement(ctx: any): any {
    }

    visitDeclaration(ctx: any): any {
    }

    visitDeleteExpression(ctx: any): any {
    }

    visitDoStatement(ctx: any): any {
    }

    visitExpressionStatement(ctx: any): any {
    }

    visitForInStatement(ctx: any): any {
    }

    visitForOfStatement(ctx: any): any {
    }

    visitForStatement(ctx: any): any {
    }

    visitIdentifierExpression(ctx: any): any {
    }


    visitIdentifierName(ctx: any): any {
    }

    visitIfStatement(ctx: any): any {
    }

    visitInExpression(ctx: any): any {
    }

    visitMemberDotExpression(ctx: any): any {
    }

    visitPostDecreaseExpression(ctx: any): any {
    }

    visitPostIncrementExpression(ctx: any): any {
    }

    visitPreDecreaseExpression(ctx: any): any {
    }

    visitPreIncrementExpression(ctx: any): any {
    }

    visitStatement(ctx: any): any {
    }

    visitStatementList(ctx: any): any {
    }

    visitVarModifier(ctx: any): any {
    }

    visitVariableDeclaration(ctx: any): any {
    }

    visitVariableDeclarationList(ctx: any): any {
    }

    visitVariableStatement(ctx: any): any {
    }

    visitWhileStatement(ctx: any): any {
    }


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


let source = "5 + 4 * 5 == 25";
let executor = new JavaScriptExecutor(source);
let result = executor.executeAll();
