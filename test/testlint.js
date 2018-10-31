'use strict';
const sinon = require('sinon');
const request = require('request');
const expect = require('chai').expect;

describe('Smoke test the mocha/chai/sinon install', () => {
    beforeEach(() => {
    });
    afterEach(() => {
    });
    it('make a stubbed request', (done) => {
        const url = 'https://mocked.swapi.co/api/people/1';
        const name = 'Luke Skywalker';
        const hair = 'blond';
        const mock = sinon.mock(request);
        mock.expects('get').withArgs(url).once().yields(null, {statusCode: 200, headers: {'content-type': 'application/json'}}, JSON.stringify({name: name, hair_color: hair}));
        request.get(url, (error, response, body) => {
                const bodyObj = JSON.parse(body);
                expect(bodyObj).to.have.property('name').equal(name);
                expect(bodyObj).to.have.property('hair_color').equal(hair);
                expect(bodyObj).to.not.have.property('eye_color');  // Make sure did't accidentally hit the real swapi
                expect(response).to.have.property('statusCode').equal(200);
                mock.verify();
                mock.restore();
                done();
            });
    });
});
