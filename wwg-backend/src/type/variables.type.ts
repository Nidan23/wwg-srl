import {RequestBodyPropertiesType} from "./requestBodyPropertiesType";
import {ResponseMessagesType} from "./responseMessages.type";

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
}