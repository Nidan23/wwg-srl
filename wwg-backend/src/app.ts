import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import {LoggingService} from "./service/logging.service";
import {VariableService} from "./service/variable.service";

export default class App {
    public app: express.Application
    public port: number

    constructor(
        controllers: any[],
        port: number,
        private variableService: VariableService,
        private loggingService: LoggingService) {
        this.app = express()
        this.port = port

        this.initMiddlewares()
        this.initControllers(controllers)
    }

    private initMiddlewares(){
        this.app.use(bodyParser.json())
        this.app.use(cors({
            origin: this.variableService.variables.corsSkip.value
        }))
    }

    private initControllers(controllers: any[]){
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router)
        })
    }

    public listen(){
        this.app.listen(this.port, () => {
            this.loggingService.message(`${this.variableService.variables.logMessages.info.appRunning} ${this.port}`)
        })
    }
}