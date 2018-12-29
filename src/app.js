'use strict';
const server = require('./server');

let winston = require('winston');

global.Logger = winston.createLogger({
    level: 'debug',
    handleExceptions: true,
    exitOnError: false,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.splat(),
        winston.format.simple(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level}: ${info.message}`;
        })
    ),
    transports: [new winston.transports.Console()]
});


let listenPort = 4000;
server.start(listenPort);

function stopServer() {
    server.stop();
}
module.exports = {
    listenPort: listenPort,
    stopServer: stopServer
};