import * as express from 'express'
import {VariableService} from "../service/variable.service";
import {TodoType} from "../type/todo.type";
import {ValidationService} from "../service/validation.service";
import {TodoService} from "../service/todo.service";
import {ResponseGeneratorService} from "../service/responseGenerator.service";

export class TodoController{
    public router = express.Router()
    private mainPath: string = this.variableService.variables.mainPath

    constructor(
        private variableService: VariableService,
        private validationService: ValidationService,
        private todoService: TodoService,
        private responseGeneratorService: ResponseGeneratorService
    ) {
        this.initRoutes()
    }

    private initRoutes(){
        this.router.get(`${this.mainPath}/${this.variableService.variables.getTodo}/:id`, this.getTodo.bind(this))
        this.router.get(`${this.mainPath}/${this.variableService.variables.getAllTodo}`, this.getAllTodo.bind(this))
        this.router.post(`${this.mainPath}/${this.variableService.variables.addTodo}`, this.addTodo.bind(this))
        this.router.delete(`${this.mainPath}/${this.variableService.variables.deleteTodo}/:id`, this.deleteTodo.bind(this))
        this.router.patch(`${this.mainPath}/${this.variableService.variables.updateTodo}`, this.updateTodo.bind(this))
    }

    private async addTodo(request: express.Request, response: express.Response) {
        const todoList: TodoType[] = request.body

        if (!this.validationService.todoRequestValidation().hasAllPropertiesToAdd(todoList))
            return response.status(400).json(this.responseGeneratorService.generateResponse(this.variableService.variables.responseMessages.badRequest, true))

        return response.status(200).json(await this.todoService.add(todoList))
    }

    private async getTodo(request: express.Request, response: express.Response){
        return response.status(200).json(await this.todoService.getOne(request.params.id))
    }

    private async getAllTodo(request: express.Request, response: express.Response){
        return response.status(200).json(await this.todoService.getAll())
    }

    private async deleteTodo(request: express.Request, response: express.Response){
        if(!(request.params?.id != undefined))
            return response.status(400).json(this.responseGeneratorService.generateResponse(this.variableService.variables.responseMessages.badRequest, true))

        return response.status(200).json(await this.todoService.remove(request.params.id))
    }

    private async updateTodo(request: express.Request, response: express.Response) {
        const todoList: TodoType[] = request.body

        if (!this.validationService.todoRequestValidation().hasAllProperties(todoList))
            return response.status(400).json(this.responseGeneratorService.generateResponse(this.variableService.variables.responseMessages.badRequest, true))

        return response.status(200).json(await this.todoService.update(todoList))
    }
}