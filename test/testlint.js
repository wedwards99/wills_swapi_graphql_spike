const request = require('request');
const expect = require('chai').expect;

const baseUrl = 'https://swapi.co/api';

describe('Smoke test the mocha/chai install', function () {
    it('returns luke', function (done) {
        request.get({url: baseUrl + '/people/1/'},
            function (error, response, body) {
                const bodyObj = JSON.parse(body);
                expect(bodyObj.name).to.equal('Luke Skywalker');
                expect(bodyObj.hair_color).to.equal('blond');
                expect(response.statusCode).to.equal(200);
                done();
            });
    });
});
