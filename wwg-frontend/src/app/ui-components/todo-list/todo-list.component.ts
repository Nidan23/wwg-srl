import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {TodoModel} from "../../model/todo.model";
import {Observable, takeUntil} from "rxjs";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  items?: TodoModel[]

  constructor(
    private todoService: TodoService
  ) {
    todoService.getAllTodos()
      .subscribe(data => {
        this.items = data.responseData
      })
  }

  ngOnInit() {
  }

  updateTodo(todo?: TodoModel){
    if(todo != null)
      this.todoService.updateTodo(todo)
    window.location.reload()
  }

  removeTodo(id?: number){
    if(id != null)
      this.todoService.removeTodo(id)
    window.location.reload()
  }
}
