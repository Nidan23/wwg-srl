import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoFormComponent } from './ui-components/add-todo-form/add-todo-form.component';
import { TodoListComponent } from './ui-components/todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AddTodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
