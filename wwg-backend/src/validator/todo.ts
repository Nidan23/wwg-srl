import {TodoType} from "../type/todo.type";

export class Todo{

    hasAllProperties(todoList: TodoType[]): boolean{
        let isValid: boolean = true
        todoList.forEach(todoElement => {
            if (!(todoElement?.id && todoElement?.name && todoElement?.createdAt && (todoElement?.isFinished != undefined)))
                isValid = false
        })

        return isValid
    }

    hasAllPropertiesToAdd(todoList: TodoType[]): boolean {
        let isValid: boolean = true
        todoList.forEach(todoElement => {
            if(!(todoElement?.name && todoElement?.createdAt && (todoElement?.isFinished != undefined)))
                isValid = false
        })

        return isValid
    }

    hasProperty(todoList: TodoType[], propertyName: string){
        let isValid: boolean = true

        todoList.forEach(todoElement => {
            if(!todoElement[propertyName])
                isValid = false
        })

        return isValid
    }
}