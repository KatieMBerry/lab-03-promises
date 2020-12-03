const { getCharacter } = require('./rickAndMortyApi');
// const fetch = require('node-fetch');

describe('getCharater fn', () => {
    it('takes in an id and a promise and returns a character object in the correct format', async () => {

        charId = 3
        return getCharacter(charId)
            .then(object => {
                expect(object).toEqual({
                    name: "Summer Smith",
                    status: "Alive",
                    species: "Human"
                });
            })
    })
})










/*getCharacter that takes an id and returns a promise that resolves to a character
return only the characters name, status, and species
WRITE YOUR TESTS FIRST*/