const sinon = require('sinon');
const expect = require('chai').expect;
const schema = require('../src/schema/querys');
const request = require('request');
const graphql = require('graphql').graphql;
const testData = require('./data/integTestData');

const okResp = {statusCode: 200, headers: {'content-type': 'application/json'}};

describe('Check starships integration', function () {
    beforeEach(() => {
    });
    afterEach(() => {
        request.get.restore();
    });
    it('test the single starship integration', function (done) {
        const singleStarShipUrl = 'https://swapi.co/api/starships/10';
        let stub = sinon.stub(request, 'get');
        stub.withArgs(singleStarShipUrl).yields(null, okResp, JSON.stringify(testData.singleStarShipRespBody));
        stub.withArgs(testData.film1Url).yields(null, okResp, JSON.stringify(testData.film1RespBody));
        stub.withArgs(testData.film2Url).yields(null, okResp, JSON.stringify(testData.film2RespBody));
        stub.withArgs(testData.film3Url).yields(null, okResp, JSON.stringify(testData.film3RespBody));
        stub.withArgs(testData.film4Url).yields(null, okResp, JSON.stringify(testData.film4RespBody));
        graphql(schema, '{ship(id: 10) {id name model manufacturer films {title release_date}}}', global).then((result) => {
            expect(result).to.have.property('data').to.have.property('ship').to.have.property('id').equal('10');
            expect(result).to.have.property('data').to.have.property('ship').to.have.property('name').equal(testData.singleStarShipRespBody['name']);
            expect(result).to.have.property('data').to.have.property('ship').to.have.property('model').equal(testData.singleStarShipRespBody['model']);
            expect(result).to.have.property('data').to.have.property('ship').to.have.property('manufacturer').equal(testData.singleStarShipRespBody['manufacturer']);
            expect(result).to.have.property('data').to.have.property('ship').to.have.property('films').length(4);
            verifyFilms(result['data']['ship']['films']);
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });

    it('test the starship list integration', function (done) {
        const multiStarShipsUrl = 'https://swapi.co/api/starships';
        let stub = sinon.stub(request, 'get');
        stub.withArgs(multiStarShipsUrl).yields(null, okResp, JSON.stringify(testData.multiStarShipRespBody));
        stub.withArgs(testData.film1Url).yields(null, okResp, JSON.stringify(testData.film1RespBody));
        stub.withArgs(testData.film2Url).yields(null, okResp, JSON.stringify(testData.film2RespBody));
        stub.withArgs(testData.film3Url).yields(null, okResp, JSON.stringify(testData.film3RespBody));
        stub.withArgs(testData.film4Url).yields(null, okResp, JSON.stringify(testData.film4RespBody));
        graphql(schema, '{ship_list {id name model manufacturer films {title release_date}}}', global).then((result) => {
            expect(result).to.have.property('data').to.have.property('ship_list').to.have.length(1);
            expect(result['data']['ship_list'][0]).to.have.property('id').to.equal('10');
            expect(result['data']['ship_list'][0]).to.have.property('name').to.equal(testData.singleStarShipRespBody['name']);
            expect(result['data']['ship_list'][0]).to.have.property('model').to.equal(testData.singleStarShipRespBody['model']);
            expect(result['data']['ship_list'][0]).to.have.property('manufacturer').to.equal(testData.singleStarShipRespBody['manufacturer']);
            expect(result['data']['ship_list'][0]).to.have.property('films').to.have.length(4);
            verifyFilms(result['data']['ship_list'][0]['films']);
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });
});

describe('Check persons integration', function () {
    beforeEach(() => {
    });
    afterEach(() => {
        request.get.restore();
    });
    it('test the single person integration', function (done) {
        const singlePersonUrl = 'https://swapi.co/api/people/2';
        let stub = sinon.stub(request, 'get');
        stub.withArgs(singlePersonUrl).yields(null, okResp, JSON.stringify(testData.singlePersonRespBody));
        stub.withArgs(testData.film1Url).yields(null, okResp, JSON.stringify(testData.film1RespBody));
        stub.withArgs(testData.film2Url).yields(null, okResp, JSON.stringify(testData.film2RespBody));
        stub.withArgs(testData.film3Url).yields(null, okResp, JSON.stringify(testData.film3RespBody));
        stub.withArgs(testData.film4Url).yields(null, okResp, JSON.stringify(testData.film4RespBody));
        graphql(schema, '{person(id: 2) {id name hair_color films {title release_date}}}', global).then((result) => {
            expect(result).to.have.property('data').to.have.property('person').to.have.property('id').equal('2');
            expect(result).to.have.property('data').to.have.property('person').to.have.property('name').equal(testData.singlePersonRespBody['name']);
            expect(result).to.have.property('data').to.have.property('person').to.have.property('hair_color').equal(testData.singlePersonRespBody['hair_color']);
            expect(result).to.have.property('data').to.have.property('person').to.have.property('films').length(4);
            verifyFilms(result['data']['person']['films']);
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });

    it('test the person list integration', function (done) {
        const multiPersonUrl = 'https://swapi.co/api/people';
        let stub = sinon.stub(request, 'get');
        stub.withArgs(multiPersonUrl).yields(null, okResp, JSON.stringify(testData.multiPersonRespBody));
        stub.withArgs(testData.film1Url).yields(null, okResp, JSON.stringify(testData.film1RespBody));
        stub.withArgs(testData.film2Url).yields(null, okResp, JSON.stringify(testData.film2RespBody));
        stub.withArgs(testData.film3Url).yields(null, okResp, JSON.stringify(testData.film3RespBody));
        stub.withArgs(testData.film4Url).yields(null, okResp, JSON.stringify(testData.film4RespBody));
        graphql(schema, '{person_list {id name hair_color films {title release_date}}}', global).then((result) => {
            expect(result).to.have.property('data').to.have.property('person_list').to.have.length(1);
            expect(result['data']['person_list'][0]).to.have.property('id').to.equal('2');
            expect(result['data']['person_list'][0]).to.have.property('name').to.equal(testData.singlePersonRespBody['name']);
            expect(result['data']['person_list'][0]).to.have.property('hair_color').to.equal(testData.singlePersonRespBody['hair_color']);
            expect(result['data']['person_list'][0]).to.have.property('films').length(4);
            verifyFilms(result['data']['person_list'][0]['films']);
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });
});

describe('Check planets integration', function () {
    beforeEach(() => {
    });
    afterEach(() => {
        request.get.restore();
    });
    it('test the single planet integration', function (done) {
        const singlePlanetUrl = 'https://swapi.co/api/planets/7';
        let stub = sinon.stub(request, 'get');
        stub.withArgs(singlePlanetUrl).yields(null, okResp, JSON.stringify(testData.singlePlanetRespBody));
        stub.withArgs(testData.film1Url).yields(null, okResp, JSON.stringify(testData.film1RespBody));
        stub.withArgs(testData.film2Url).yields(null, okResp, JSON.stringify(testData.film2RespBody));
        stub.withArgs(testData.film3Url).yields(null, okResp, JSON.stringify(testData.film3RespBody));
        stub.withArgs(testData.film4Url).yields(null, okResp, JSON.stringify(testData.film4RespBody));
        graphql(schema, '{planet(id: 7) {id name gravity films {title release_date}}}', global).then((result) => {
            expect(result).to.have.property('data').to.have.property('planet').to.have.property('id').equal('7');
            expect(result).to.have.property('data').to.have.property('planet').to.have.property('name').equal(testData.singlePlanetRespBody['name']);
            expect(result).to.have.property('data').to.have.property('planet').to.have.property('gravity').equal(testData.singlePlanetRespBody['gravity']);
            expect(result).to.have.property('data').to.have.property('planet').to.have.property('films').length(4);
            verifyFilms(result['data']['planet']['films']);
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });

    it('test the planet list integration', function (done) {
        const multiPlanetUrl = 'https://swapi.co/api/planets';
        let stub = sinon.stub(request, 'get');
        stub.withArgs(multiPlanetUrl).yields(null, okResp, JSON.stringify(testData.multiPlanetRespBody));
        stub.withArgs(testData.film1Url).yields(null, okResp, JSON.stringify(testData.film1RespBody));
        stub.withArgs(testData.film2Url).yields(null, okResp, JSON.stringify(testData.film2RespBody));
        stub.withArgs(testData.film3Url).yields(null, okResp, JSON.stringify(testData.film3RespBody));
        stub.withArgs(testData.film4Url).yields(null, okResp, JSON.stringify(testData.film4RespBody));
        graphql(schema, '{planet_list {id name gravity films {title release_date}}}', global).then((result) => {
            expect(result).to.have.property('data').to.have.property('planet_list').to.have.length(1);
            expect(result['data']['planet_list'][0]).to.have.property('id').to.equal('7');
            expect(result['data']['planet_list'][0]).to.have.property('name').to.equal(testData.singlePlanetRespBody['name']);
            expect(result['data']['planet_list'][0]).to.have.property('gravity').to.equal(testData.singlePlanetRespBody['gravity']);
            expect(result['data']['planet_list'][0]).to.have.property('films').length(4);
            verifyFilms(result['data']['planet_list'][0]['films']);
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });
});

function verifyFilms(filmArray) {
    expect(filmArray[0]).to.have.property('title').equal('The Empire Strikes Back');
    expect(filmArray[0]).to.have.property('release_date').equal('1980-05-17');
    expect(filmArray[1]).to.have.property('title').equal('The Force Awakens');
    expect(filmArray[1]).to.have.property('release_date').equal('2015-12-11');
    expect(filmArray[2]).to.have.property('title').equal('Return of the Jedi');
    expect(filmArray[2]).to.have.property('release_date').equal('1983-05-25');
    expect(filmArray[3]).to.have.property('title').equal('A New Hope');
    expect(filmArray[3]).to.have.property('release_date').equal('1977-05-25');
}
