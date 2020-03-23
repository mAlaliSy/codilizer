enum EntryType {
    VARIABLE
}

class TableEntry {
    type: EntryType;
    value: any;

    constructor(type: EntryType, value: any) {
        this.type = type;
        this.value = value;
    }
}

export class AlreadyDefinedIdentifier extends Error {

}

export default class SymbolTable {

    parent?: SymbolTable;
    entries: any;

    constructor(parent?: SymbolTable) {
        this.parent = parent;
        this.entries = {};
    }

    defineVariable(name: string, value: any = undefined) {
        if (this.entries[name]) {
            throw new AlreadyDefinedIdentifier();
        }
        this.entries[name] = new TableEntry(EntryType.VARIABLE, value);
    }

    getValue(name: string) : any {
        if(this.entries[name] !== undefined)
            return this.entries[name];
        if(this.parent) return this.parent.getValue(name);
        return undefined;
    }

    updateOrCreate(name:string, value:any=undefined){
        if(this.getValue(name) === undefined){
            this.defineVariable(name, value);
            return;
        }
        this.entries[name].value = value;
    }


}