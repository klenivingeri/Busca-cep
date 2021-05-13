const request = require('supertest')

const app = require('../../src/app')
describe("Routes", () =>{
    it("should return status 200", async () =>{
        const cep  = {
            num: 14404235
        }
        const response = await request(app)
        .get('/api/'+ cep.num)
        expect(response.status).toBe(200);
    })

})
describe("Routes", () =>{
    it("you should check if there is an address in the return", async () =>{
        const cep  = {
            num: 14404235
        }
        const response = await request(app)
        .get('/api/'+ cep.num)
        expect(response.body).toHaveProperty( "cep", "logradouro", "bairro", "localidade","uf");
    })

})






