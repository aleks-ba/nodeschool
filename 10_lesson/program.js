const net    = require('net');
const server = net.createServer(connectionListener);
const port   = process.argv[2];

function connectionListener(socket) {
    const currentDate   = new Date();
    const dateYear      = currentDate.getFullYear();
    const dateMonth     = '0' + (currentDate.getMonth() + 1);
    const dateDay       = currentDate.getDate();
    const dateHours     = currentDate.getHours();
    const dateMinutes   = currentDate.getMinutes();
    const formattedDate = `${dateYear}-${dateMonth}-${dateDay} ${dateHours}:${dateMinutes}`;

    socket.end(formattedDate + '\n');

}
server.listen(port);