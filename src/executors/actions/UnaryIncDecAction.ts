import Action from "./Action";

export default class UnaryIncDecAction extends Action{
    varName:string;
    isInc:boolean;
    isPre:boolean;
    public constructor(line:number, varName:string, isInc: boolean, isPre:boolean){
        super(line)
        this.varName = varName;
        this.isInc = isInc;
        this.isPre = isPre;
    }
}