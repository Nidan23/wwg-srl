import { Injectable } from '@angular/core';
import {TodoModel} from "../model/todo.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResponseModel} from "../model/httpResponse.model";

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  private baseUrl: string = "http://localhost:3000/todo"

  constructor(private http: HttpClient) { }

  addTodo(todo: TodoModel){
    todo.isFinished = false
    todo.createdAt = (new Date()).toDateString()

    const todoPayload: TodoModel[] = [todo]
    return this.http.post(`${this.baseUrl}/add`, todoPayload)
  }

  removeTodo(id: number){
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }

  getAllTodos(): Observable<HttpResponseModel>{
    return this.http.get<HttpResponseModel>(`${this.baseUrl}/getAll`)
  }

  getTodo(): Observable<TodoModel>{
    return this.http.get(`${this.baseUrl}/get`)
  }

  updateTodo(todo: TodoModel){
    if(todo.isFinished) {
      todo.isFinished = false
      todo.completedAt = ""
    } else {
      todo.isFinished = true
      todo.completedAt = (new Date()).toDateString()
    }

    const todoPayload: TodoModel[] = [todo]
    return this.http.patch(`${this.baseUrl}/update`, todoPayload)
  }
}
