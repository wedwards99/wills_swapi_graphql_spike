'use strict';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/querys');

let server;

function start(listenPort) {
    const app = express();
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    }));
    server = app.listen(listenPort, () => {
        Logger.info('listening use: http://localhost:' + listenPort + '/graphql');
    });
}

function stop() {
    server.close();
}

module.exports = {
    start: start,
    stop: stop,
};
