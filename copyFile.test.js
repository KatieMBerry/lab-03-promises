const fs = require('fs').promises;
const { copyAFile } = require('./copyFile');

describe('copyAFile fn', () => {
    afterEach(() => {
        return fs.rm('./newFile-copy.txt');
    });

    it('reads a file and writes a copy file', async () => {

        return copyAFile('./newFile.txt', './newFile-copy.txt')
            .then(() => {
                return fs.readFile('./newFile.txt', 'utf-8');
            })
            .then(
                newFile => {
                    expect(newFile)
                        .toEqual('I am not sure about this')
                }
            )
    })
});