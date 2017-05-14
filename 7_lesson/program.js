const http         = require('http');
const urlAttribute = process.argv[2];
let numberOfCharacters = 0;
let text = '';


http.get(urlAttribute, (response) => {
    response.setEncoding('utf8');
    response.on('data', addData);
    response.on('end', printData);
    response.on('error', console.error);
});

function addData(data) {
    text += data;
}

function printData() {
    console.log(text.length);
    console.log(text);
}