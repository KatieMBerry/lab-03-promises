const fs = require('fs').promises;
const { transform } = require('./transform');

describe('transform fn', () => {
    it('reads a file, remove all capital letters, then make all letters capital, then reverse the string', async () => {

        return await transform('./newFile.txt')
            .then(
                transformedFile => expect(transformedFile)
                    .toEqual('SIHT TUOBA ERUS TON MA '))
    })
})