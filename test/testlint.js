const sinon = require('sinon');
const request = require('request');
const expect = require('chai').expect;

describe('Smoke test the mocha/chai/sinon install', () => {
    beforeEach(() => {
    });
    afterEach(() => {
        request.get.restore();
    });
    it('make a stubbed request', (done) => {
        const url = 'https://swapi.co/api/people/1/';
        const name = 'Luke Skywalker';
        const hair = 'blond';
        const stub = sinon.stub(request, 'get');
        stub.withArgs(url).yields(null, {statusCode: 200, headers: {'content-type': 'application/json'}}, JSON.stringify({name: name, hair_color: hair}));
        request.get(url,
            function (error, response, body) {
                const bodyObj = JSON.parse(body);
                expect(bodyObj).to.have.property('name').equal(name);
                expect(bodyObj).to.have.property('hair_color').equal(hair);
                expect(response).to.have.property('statusCode').equal(200);
                done();
            });
    });
});
