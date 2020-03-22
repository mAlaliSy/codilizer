export default class Error{
    fatal:boolean;
    message: string;

    constructor(fatal: boolean, message: string) {
        this.fatal = fatal;
        this.message = message;
    }
}