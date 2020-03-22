import Action from "./Action";

export default class EvaluateExpressionAction extends Action{
    expression: string;
    result:any;

    constructor(lineNumber: number, expression: string, result: any) {
        super(lineNumber);
        this.expression = expression;
        this.result = result;
    }
}