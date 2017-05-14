const http         = require('http');
const fs           = require('fs');
const server       = http.createServer(connectionListener);
const port         = process.argv[2];
const fileLocation = process.argv[3];

const stream = fs.createReadStream(fileLocation);



function connectionListener(request, response) {
    stream.pipe(response);
}

server.listen(port);