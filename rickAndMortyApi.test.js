const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');
const fetch = require('node-fetch');
const mockResponse = require('./mock-response.json');

jest.mock('node-fetch');

describe('getCharater fn', () => {
    it('takes in an id and a promise and returns a character object in the correct format', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockResponse)
        });
        charId = 3
        return getCharacter(charId)
            .then(object => {
                expect(object).toEqual({
                    name: "Morty Smith",
                    status: "Alive",
                    species: "Human"
                });
            })
    })
})

describe('getManyCharacters fn', () => {
    it('that takes an array of ids and returns a promise that resolves with an array of characters', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockResponse)
        });
        const characters = await getManyCharacters([1, 2, 3])

        expect(characters).toEqual([
            { name: "Morty Smith", status: "Alive", species: "Human" },
            { name: "Morty Smith", status: "Alive", species: "Human" },
            { name: "Morty Smith", status: "Alive", species: "Human" }
        ])
    })
})

