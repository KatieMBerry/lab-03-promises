const fetch = require('node-fetch');

async function getCharacter(id) {
    try {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(({
                name,
                status,
                species
            }) => ({
                name,
                status,
                species
            }))
    } catch (err) {
        console.log(err)
    }
}

async function getManyCharacters(ids) {
    return Promise.all(ids.map(id => getCharacter(id)));
}

module.exports = {
    getCharacter,
    getManyCharacters
};