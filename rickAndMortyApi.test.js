const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');
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

describe('getManyCharacters fn', () => {
    it('that takes an array of ids and returns a promise that resolves with an array of characters', async () => {
        const characters = await getManyCharacters([1, 3, 5])

        expect(characters).toEqual([
            { name: "Rick Sanchez", status: "Alive", species: "Human" },
            { name: "Summer Smith", status: "Alive", species: "Human" },
            { name: "Jerry Smith", status: "Alive", species: "Human" }
        ])
    })
})

