import {readFileSync} from "fs";
import {VariablesType} from "../type/variables.type";

export class VariableService{
    public variables: VariablesType

    constructor() {
        this.variables = JSON.parse(readFileSync("./src/assets/variables/variables.json", "utf-8"))
    }
}