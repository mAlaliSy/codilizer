import Action from "./Action";

export default class PrintAction extends Action{
    data:any;

    constructor(lineNumber: number, data: any) {
        super(lineNumber);
        this.data = data;
    }
}