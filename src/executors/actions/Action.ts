export default class Action {
    lineNumber: number;
    message?:string;
    constructor(lineNumber: number, message?:string) {
        this.lineNumber = lineNumber;
        this.message = message;
    }

}