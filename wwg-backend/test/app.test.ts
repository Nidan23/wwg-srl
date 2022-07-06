import * as axios from 'axios'
import { readFileSync } from "fs"

const testCase = JSON.parse(readFileSync('./test/test_case.json', "utf-8"))

describe('Test TODO', () => {
    it('should add new todo', async () => {
        await axios.default.post('http://localhost:3000/todo/add', testCase.add)
            .then(r => {
                const responseData = r.data

                expect(responseData.message).toBe("Todos successfully added")
            })
            .catch(err => {
                const errData = err.response.data

                expect(errData.message).toBe("Todos not added error happened")
            })
    })
    it('should get todo', async () => {
        await axios.default.get(`http://localhost:3000/todo/get/${testCase.delete.id}`)
            .then(r => {
                const responseData = r.data

                expect(responseData.message).toBe("Todo successfully got")
            })
            .catch(err => {
                const errData = err.response.data

                expect(errData.message).toBe("Todo get went unsuccessfully error happened")
            })
    })
    it('should update todo', async () => {
        await axios.default.patch('http://localhost:3000/todo/update', testCase.update)
            .then(r => {
                const responseData = r.data

                expect(responseData.message).toBe("Todos successfully updated")
            })
            .catch(err => {
                const errData = err.response.data

                expect(errData.message).toBe("Todos update went unsuccessfully error happened")
            })
    })
    it('should get all todos', async () => {
        await axios.default.get('http://localhost:3000/todo/getAll')
            .then(r => {
                const responseData = r.data

                expect(responseData.message).toBe("Todos successfully got")
            })
            .catch(err => {
                const errData = err.response.data

                expect(errData.message).toBe("Todos get went unsuccessfully error happened")
            })
    })
    it('should delete todo', async () => {
        await axios.default.delete(`http://localhost:3000/todo/delete/${testCase.delete.id}`)
            .then(r => {
                const responseData = r.data

                expect(responseData.message).toBe("Todo successfully deleted")
            })
            .catch(err => {
                const errData = err.response.data

                expect(errData.message).toBe("Todo delete went unsuccessfully error happened")
            })
    })
})