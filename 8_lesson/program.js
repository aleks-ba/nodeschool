const http         = require('http');
const urlAttribute = process.argv[2];
const urlAttribute2 = process.argv[3];
const urlAttribute3 = process.argv[4];
let text = '';
let text2 = '';
let text3 = '';
const dataList = []


http.get(urlAttribute, (response) => {
    response.setEncoding('utf8');
    response.on('data', addData);
    response.on('end', printData);
    response.on('error', console.error);
});

setTimeout(function() {
    http.get(urlAttribute2, (response) => {
        response.setEncoding('utf8');
        response.on('data', addData2);
        response.on('end', printData2);
        response.on('error', console.error);
    });

    http.get(urlAttribute3, (response) => {
        response.setEncoding('utf8');
        response.on('data', addData3);
        response.on('end', printData3);
        response.on('error', console.error);
    });
}, 1000)





function addData(data) {
    text += data;
}
function addData2(data) {
    text2 += data;
}
function addData3(data) {
    text3 += data;
}

function printData() {
    console.log(text);
}

function printData2() {
    console.log(text2);
}

function printData3() {
    console.log(text3);
}