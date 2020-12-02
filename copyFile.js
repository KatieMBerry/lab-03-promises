const fs = require('fs').promises;


async function copyAFile(src, dst) {
    try {
        const fileData = await fs.readFile(src, 'utf-8');
        console.log(src);
        await fs.writeFile(dst, fileData);

    } catch (err) {
        console.log(err);
    }
}

module.exports = { copyAFile };