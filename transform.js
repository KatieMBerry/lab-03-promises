const fs = require('fs').promises;

async function transform(src) {
    try {
        return await fs.readFile(src, 'utf-8')
            .then(fileData => fileData.split('').filter(filtered => filtered === filtered.toLowerCase()))
            .then(fileData => fileData.map(item => item.toUpperCase()))
            .then(fileData => fileData.reverse().join(''))
    } catch (err) {
        console.log(err)
    }
};

module.exports = { transform };




