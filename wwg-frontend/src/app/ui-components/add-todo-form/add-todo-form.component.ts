import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {TodoModel} from "../../model/todo.model";

@Component({
  selector: 'add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  addTodo(name: string){
    const todo: TodoModel = new TodoModel(name)
    this.todoService.addTodo(todo)
  }
}
