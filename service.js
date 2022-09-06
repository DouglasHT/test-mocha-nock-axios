const {get} = require('axios')

const URL = 'https://swapi.dev/api/people'

async function obterPessoas(id){
    const url = `${URL}/${id}`
    const data = await get(url)
    console.log(data.data);
    return {
        nome: data.data.name,
        peso: data.data.height
    }
}


module.exports = {
    obterPessoas
}