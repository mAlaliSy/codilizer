import Action from "./Action";

export default class VarDecAction extends Action {
    varName: string;
    initialValue: any;

    constructor(lineNumber: number, varName: string, initialValue: any = undefined) {
        super(lineNumber);
        this.varName = varName;
        this.initialValue = initialValue;
    }

}