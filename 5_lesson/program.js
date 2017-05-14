const pathArgument = process.argv[2];
const extension    = process.argv[3];
const readDir      = require('../5_lesson/readDirModule.js');

readDir(pathArgument, extension, (error, data) => {
    if (error) {
        return console.log(error)
    }

    data.forEach(fileName => {
        console.log(fileName)
    })
});
