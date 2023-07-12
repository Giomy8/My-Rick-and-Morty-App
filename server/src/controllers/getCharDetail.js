const axios = require('axios');

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then(data => {

        let character = {
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
        }
        res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch(err => 
        res
        .writeHead(500, {"Content-type": "text/plain"})
        .end(`The character with id:${id} was not found`)
        )  
}

module.exports = getCharDetail;