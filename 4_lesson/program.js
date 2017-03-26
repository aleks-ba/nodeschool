const fs = require('fs');
const path = require('path');
const pathArgument = process.argv[2];
const extension = process.argv[3];
fs.readdir(pathArgument, doneReadingCallback);

function doneReadingCallback(error, filesNameList) {
    if (error) {
        throw new Error(error);
    }

    const txtFilesNamesList = filesNameList.reduce((accumulator, fileName) => {
        if (path.extname(fileName) === '.' + extension) {
            accumulator.push(fileName)
        }
        return accumulator;
    }, []);

    txtFilesNamesList.map(fileName => {
        console.log(fileName);
        return true;
    });
}


