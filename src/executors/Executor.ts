import Action from "./actions/Action";

 abstract class Executor {
    source: string;

    protected constructor(source: string) {
        this.source = source;
    }

    abstract executeAll(): Array<Action>;
}

export default Executor;