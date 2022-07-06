import {ResponseType} from "../type/response.type";

export class ResponseGeneratorService{

    generateResponse(message: string, isError: boolean, data?: any): ResponseType{
        return { message: message, isError: isError, responseData: data }
    }
}