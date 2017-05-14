const http         = require('http');
const urlAttribute = process.argv[2];


http.get(urlAttribute, (response) => {
    response.setEncoding('utf8');
    response.on('data', console.log)
    response.on('error', console.error)
});
