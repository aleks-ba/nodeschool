const fs   = require('fs');
const path = require('path');

module.exports = function(pathName, extName, callback) {
    fs.readdir(pathName, (error, filesNameList) => {
        if (error) {
            return callback(error)
        }

        const txtFilesNamesList = filesNameList.reduce((accumulator, fileName) => {
            if (path.extname(fileName) === '.' + extName) {
                accumulator.push(fileName)
            }
            return accumulator;
        }, []);

        callback(null, txtFilesNamesList);

    });
};
