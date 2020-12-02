const fs = require('fs').promises;


async function transform(src) {
    // try {
    //     const fileData = await fs.readFile(src, 'utf-8');
    //     await fs.writeFile(dst, fileData);

    // } catch (err) {
    //     console.log(err);
    // }
}

module.exports = { transform };

/*use fsPromises.readFile to read a file
then remove all capital letters
then make all letters capital
then reverse the string*/