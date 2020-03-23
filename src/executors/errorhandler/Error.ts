export default class ExecutionError{
    fatal:boolean;
    message: string;

    constructor(fatal: boolean, message: string) {
        this.fatal = fatal;
        this.message = message;
    }
}