import * as express from 'express'
import * as bodyParser from 'body-parser'

export default class App {
    public app: express.Application
    public port: number

    constructor(controllers: any[], port: number) {
        this.app = express()
        this.port = port

        this.initMiddlewares()
        this.initControllers(controllers)
    }

    private initMiddlewares(){
        this.app.use(bodyParser.json())
    }

    private initControllers(controllers: any[]){
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router)
        })
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`Started on port: ${this.port}`)
        })
    }
}