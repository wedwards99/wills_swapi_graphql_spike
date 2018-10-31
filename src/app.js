'use strict';
const server = require('./server');

let listenPort = 4000;
server.start(listenPort);

function stopServer() {
    server.stop();
}
module.exports = {
    listenPort: listenPort,
    stopServer: stopServer
};