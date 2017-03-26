const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', doneReadingCallback);

function doneReadingCallback(error, fileContent) {
    if (error) {
        throw new Error(error);
    }
    console.log(fileContent.split('\n').length - 1);
}


