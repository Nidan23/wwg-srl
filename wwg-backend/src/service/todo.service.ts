import {DatabaseService} from "./database.service";
import {TodoType} from "../type/todo.type";
import {ResponseGeneratorService} from "./responseGenerator.service";
import {VariableService} from "./variable.service";
import {ResponseMessagesType} from "../type/responseMessages.type";

export class TodoService{
    private responseMessages: ResponseMessagesType

    constructor(
        private databaseService: DatabaseService,
        private responseGeneratorService: ResponseGeneratorService,
        private variableService: VariableService
    ) {
        this.responseMessages = this.variableService.variables.responseMessages
    }

    add(todoList: TodoType[]) {
        return Promise.resolve()
            .then(async () => {
                for (const todo of todoList) {
                    await this.databaseService.addTodo(todo)
                        .catch(err => {
                            return this.responseGeneratorService.generateResponse(this.responseMessages.todoAddNegative, true)
                        })
                }

                return this.responseGeneratorService.generateResponse(this.responseMessages.todoAddPositive, false)
            })
    }
    remove(todoId: string){
        return Promise.resolve()
            .then(async () => {
                    await this.databaseService.deleteTodo(parseInt(todoId))
                        .catch(err => {
                            return this.responseGeneratorService.generateResponse(this.responseMessages.todoDeleteNegative, true)
                        })

                return this.responseGeneratorService.generateResponse(this.responseMessages.todoDeletePositive, false)
            })
    }
    update(todoList: TodoType[]){
        return Promise.resolve()
            .then(async () => {
                for (const todo of todoList) {
                    await this.databaseService.updateTodo(todo)
                        .catch(err => {
                            return this.responseGeneratorService.generateResponse(this.responseMessages.todoUpdateNegative, true)
                        })
                }

                return this.responseGeneratorService.generateResponse(this.responseMessages.todoUpdatePositive, false)
            })
    }
    getAll(){
        return Promise.resolve()
            .then(async () => {
                const todos = await this.databaseService.getAllTodos()
                    .catch(err => {
                        return this.responseGeneratorService.generateResponse(this.responseMessages.todoGetAllNegative, true)
                    })

                return this.responseGeneratorService.generateResponse(this.responseMessages.todoGetAllPositive, false, todos)
            })
    }
    getOne(todoId: string){
        return Promise.resolve()
            .then(async () => {
                const todo = await this.databaseService.getTodoById(parseInt(todoId))
                    .catch(err => {
                        return this.responseGeneratorService.generateResponse(this.responseMessages.todoGetNegative, true)
                    })

                return this.responseGeneratorService.generateResponse(this.responseMessages.todoGetPositive, false, todo)
            })
    }
}