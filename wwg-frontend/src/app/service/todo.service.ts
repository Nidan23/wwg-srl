import { Injectable } from '@angular/core';
import {BackendConnectorService} from "./backend-connector.service";
import {TodoModel} from "../model/todo.model";
import {Observable} from "rxjs";
import {HttpResponseModel} from "../model/httpResponse.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private backendConnectorService: BackendConnectorService
  ) {
  }

  addTodo(todo: TodoModel){
    this.backendConnectorService.addTodo(todo)
      .subscribe()
  }

  removeTodo(id: number){
    this.backendConnectorService.removeTodo(id)
      .subscribe()
  }

  getAllTodos(): Observable<HttpResponseModel>{
    return this.backendConnectorService.getAllTodos()
  }

  updateTodo(todo: TodoModel){
    this.backendConnectorService.updateTodo(todo)
      .subscribe()
  }
}
