import { DataSource } from "typeorm"
import {VariableService} from "./variable.service";
import {TodoModel} from "../model/todo.model";
import {TodoType} from "../type/todo.type";
import {LoggingService} from "./logging.service";

export class DatabaseService {

    constructor(
        private variableService: VariableService,
        private loggingService: LoggingService
    ) {
        this.initDatabaseConnection()
    }

    private dataSource: DataSource = new DataSource({
        type: "sqlite",
        database: process.env.DB_NAME || "todo",
        entities: ["src/model/*.ts"],
        logging: true,
        synchronize: true,
    })

    private initDatabaseConnection(){
        this.dataSource
            .initialize()
            .then(() => {
                this.loggingService.message(this.variableService.variables.logMessages.info.database)
            })
            .catch((err) => {
                this.loggingService.error(this.variableService.variables.logMessages.error.database)
            })
    }

    getAllTodos(){
        return this.getRepository().find()
    }

    getTodoById(todoId: number){
        return this.getRepository().findOneBy({ id: todoId })
    }

    addTodo(todo: TodoType){
        return this.getRepository().save(todo)
    }

    updateTodo(todo: TodoType){
        // @ts-ignore
        return this.getRepository().update(todo.id, {name: todo.name, createdAt: todo.createdAt, completedAt: todo.completedAt, isFinished: todo.isFinished })
    }

    deleteTodo(todoId: number){
        return this.getRepository().delete({ id: todoId })
    }

    getRepository(repositoryName?: any){
        if(repositoryName)
            return this.dataSource.getRepository(repositoryName)

        return this.dataSource.getRepository(TodoModel)
    }
}