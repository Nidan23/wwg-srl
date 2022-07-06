export interface LogMessagesType{
    info: InfoMessageType
    warning: WarningMessageType
    error: ErrorMessageType
}

interface InfoMessageType{
    add: string
    remove: string
    update: string
    get: string
    database: string
    appRunning: string
}

interface WarningMessageType{
    notValid: string
}

interface ErrorMessageType{
    database: string
}