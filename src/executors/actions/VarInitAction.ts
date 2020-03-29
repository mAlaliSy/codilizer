import Action from "./Action";

export default class VarInitAction extends Action {
    varName: string;
    initialValue: any;

    constructor(lineNumber: number, varName: string, initialValue: any) {
        super(lineNumber);
        this.varName = varName;
        this.initialValue = initialValue;
    }

}