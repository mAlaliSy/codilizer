import Action from "./Action";

export default class DeleteVariableAction extends Action {
    varName: string;

    constructor(lineNumber: number, varName: string) {
        super(lineNumber);
        this.varName = varName;
    }

}