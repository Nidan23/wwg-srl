import {TodoModel} from "./todo.model";

export interface HttpResponseModel{
  message: string
  isError: boolean
  responseData: TodoModel[]
}
