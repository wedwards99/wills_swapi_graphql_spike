'use strict';
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const server = require('../src/server');

const expect = chai.expect;
chai.use(sinonChai);

describe('Smoke test application startup', () => {
    it('Test that server starts', (done) => {
        const serverStartSpy = sinon.spy(server, 'start');
        const app = require('../src/app');
        setTimeout(() => {
            app.stopServer();
            expect(serverStartSpy).to.have.been.calledOnce.calledWith(app.listenPort);
            serverStartSpy.restore();
            done();
        }, 500);
    });
    it('Test that server uses right endpoint URI on the right port', (done) => {
        const listenPort = 55555;
        const application = require('express').application;
        const appUseSpy = sinon.spy(application, 'use');
        const appListenSpy = sinon.spy(application, 'listen');
        server.start(listenPort);
        setTimeout(() => {
            server.stop();
            expect(appUseSpy).to.have.been.calledOnce.calledWith('/graphql');
            expect(appListenSpy).to.have.been.calledOnce.calledWith(listenPort);
            appUseSpy.restore();
            appListenSpy.restore();
            done();
        }, 500);
    });
});
