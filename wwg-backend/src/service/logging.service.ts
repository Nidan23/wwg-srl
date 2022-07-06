import {VariableService} from "./variable.service";

export class LoggingService{

    constructor(
        private variableService: VariableService
    ) {
    }

    private writeLog(message: string, messageType: string){
        console.log(`${new Date()} - ${messageType.toUpperCase()}: ${message}`)
    }

    message(message: string){
        this.writeLog(message, this.variableService.variables.logMessagesType.info)
    }

    warning(message: string){
        this.writeLog(message, this.variableService.variables.logMessagesType.warning)
    }

    error(message: string){
        this.writeLog(message, this.variableService.variables.logMessagesType.error)
    }
}