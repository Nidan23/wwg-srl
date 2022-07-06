import {RequestBodyPropertiesType} from "./requestBodyPropertiesType";
import {ResponseMessagesType} from "./responseMessages.type";
import {LogType} from "./log.type";
import {LogMessagesType} from "./logMessages.type";

export interface VariablesType{
    // Database logging
    databaseUp: string
    databaseDown: string

    // Routes
    mainPath: string
    addTodo: string
    getTodo: string
    getAllTodo: string
    deleteTodo: string
    updateTodo: string
    defaultPort: string

    // Request/Response
    requestProperties: RequestBodyPropertiesType
    responseMessages: ResponseMessagesType

    // Logs
    logMessagesType: LogType
    logMessages: LogMessagesType
}