const assert = require('assert')
const { obterPessoas } = require('./service')

// instalamos o pacote nock, para simular requisicoes
const nock = require('nock')

describe('Star Wars Tests', function(){
    this.beforeAll(() => {
        const response = {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: 'https://swapi.dev/api/planets/1/',

        }

        nock('https://swapi.dev/api/people')
        .get('/1')
        .reply(200, response)

    })


    it('deve buscar o Luke com o formato correto', async () => {
        const expected = {nome: 'Luke Skywalker', peso: 172}
        const id = 1 
        const resultado = await obterPessoas(id)
        assert.deepEqual(resultado, expected)
    })
})
