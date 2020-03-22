import Action from "./Action";

export default class AssignmentAction extends Action {
    varName: string;
    value: any;

    constructor(lineNumber: number, varName: string, value: any) {
        super(lineNumber);
        this.varName = varName;
        this.value = value;
    }
}