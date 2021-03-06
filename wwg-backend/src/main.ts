import App from './app'
import * as dotenv from 'dotenv'
import {TodoController} from "./controller/todo.controller";
import {DatabaseService} from "./service/database.service";
import {VariableService} from "./service/variable.service";
import {TodoService} from "./service/todo.service";
import {ValidationService} from "./service/validation.service";
import {ResponseGeneratorService} from "./service/responseGenerator.service";
import {LoggingService} from "./service/logging.service";

dotenv.config({path:`${__dirname}/assets/env/.env`})

const variableService: VariableService = new VariableService()
const responseGeneratorService: ResponseGeneratorService = new ResponseGeneratorService()
const validationService: ValidationService = new ValidationService()
const loggingService: LoggingService = new LoggingService(variableService)
const databaseService: DatabaseService = new DatabaseService(variableService, loggingService)
const todoService: TodoService = new TodoService(databaseService, responseGeneratorService, variableService)

const app = new App(
    [
        new TodoController(variableService, validationService, todoService, responseGeneratorService, loggingService)
    ],
    parseInt(process.env.SERVER_PORT || variableService.variables.defaultPort),
    variableService,
    loggingService
)

app.listen()