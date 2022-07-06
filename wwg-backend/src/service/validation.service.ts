import {Todo} from "../validator/todo";

export class ValidationService {

    todoRequestValidation(): Todo{
        return new Todo()
    }
}