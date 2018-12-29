'use strict';
const sinon = require('sinon');
const expect = require('chai').expect;
const schema = require('../src/schema/querys');
const request = require('request');
const graphql = require('graphql').graphql;
const testData = require('./data/integTestData');

const okResp = {statusCode: 200, headers: {'content-type': 'application/json'}};
const missingResp = {statusCode: 404};

describe('Test graphql() function integration', () => {
    describe('Test starships graphql() integration', () => {
        beforeEach(() => {
        });
        afterEach(() => {
            request.get.restore();
        });
        it('test the single starship integration', done => {
            setupStubsWithFilms(testData.singleStarShipUrl, testData.singleStarShipRespBody);
            graphql(schema, '{ship(id: 10) {id name model manufacturer films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('ship').to.have.property('id').equal('10');
                expect(result).to.have.property('data').to.have.property('ship').to.have.property('name').equal(testData.singleStarShipRespBody['name']);
                expect(result).to.have.property('data').to.have.property('ship').to.have.property('model').equal(testData.singleStarShipRespBody['model']);
                expect(result).to.have.property('data').to.have.property('ship').to.have.property('manufacturer').equal(testData.singleStarShipRespBody['manufacturer']);
                expect(result).to.have.property('data').to.have.property('ship').to.have.property('films').length(4);
                verifyFilms(result['data']['ship']['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
        it('test the starship list integration', done => {
            setupStubsWithFilms(testData.multiStarShipUrl, testData.multiStarShipRespBody);
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
                Logger.error(err.stack);
                done(err);
            });
        });
    });

    describe('Test persons graphql() integration', () => {
        beforeEach(() => {
        });
        afterEach(() => {
            request.get.restore();
        });
        it('test the single person integration', done => {
            setupStubsWithFilms(testData.singlePersonUrl, testData.singlePersonRespBody);
            graphql(schema, '{person(id: 2) {id name hair_color films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('person').to.have.property('id').equal('2');
                expect(result).to.have.property('data').to.have.property('person').to.have.property('name').equal(testData.singlePersonRespBody['name']);
                expect(result).to.have.property('data').to.have.property('person').to.have.property('hair_color').equal(testData.singlePersonRespBody['hair_color']);
                expect(result).to.have.property('data').to.have.property('person').to.have.property('films').length(4);
                verifyFilms(result['data']['person']['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
        it('test the person list integration', done => {
            setupStubsWithFilms(testData.multiPersonUrl, testData.multiPersonRespBody);
            graphql(schema, '{person_list {id name hair_color films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('person_list').to.have.length(1);
                expect(result['data']['person_list'][0]).to.have.property('id').to.equal('2');
                expect(result['data']['person_list'][0]).to.have.property('name').to.equal(testData.singlePersonRespBody['name']);
                expect(result['data']['person_list'][0]).to.have.property('hair_color').to.equal(testData.singlePersonRespBody['hair_color']);
                expect(result['data']['person_list'][0]).to.have.property('films').length(4);
                verifyFilms(result['data']['person_list'][0]['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
    });

    describe('Test planets graphql() integration', () => {
        beforeEach(() => {
        });
        afterEach(() => {
            request.get.restore();
        });
        it('test the single planet integration', done => {
            setupStubsWithFilms(testData.singlePlanetUrl, testData.singlePlanetRespBody);
            graphql(schema, '{planet(id: 7) {id name gravity films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('planet').to.have.property('id').equal('7');
                expect(result).to.have.property('data').to.have.property('planet').to.have.property('name').equal(testData.singlePlanetRespBody['name']);
                expect(result).to.have.property('data').to.have.property('planet').to.have.property('gravity').equal(testData.singlePlanetRespBody['gravity']);
                expect(result).to.have.property('data').to.have.property('planet').to.have.property('films').length(4);
                verifyFilms(result['data']['planet']['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
        it('test the planet list integration', done => {
            setupStubsWithFilms(testData.multiPlanetUrl, testData.multiPlanetRespBody);
            graphql(schema, '{planet_list {id name gravity films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('planet_list').to.have.length(1);
                expect(result['data']['planet_list'][0]).to.have.property('id').to.equal('7');
                expect(result['data']['planet_list'][0]).to.have.property('name').to.equal(testData.singlePlanetRespBody['name']);
                expect(result['data']['planet_list'][0]).to.have.property('gravity').to.equal(testData.singlePlanetRespBody['gravity']);
                expect(result['data']['planet_list'][0]).to.have.property('films').length(4);
                verifyFilms(result['data']['planet_list'][0]['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
    });
    describe('Test species graphql() integration', () => {
        beforeEach(() => {
        });
        afterEach(() => {
            request.get.restore();
        });
        it('test the single species integration', done => {
            setupStubsWithFilms(testData.singleSpeciesUrl, testData.singleSpeciesRespBody);
            graphql(schema, '{species(id: 5) {id name classification films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('species').to.have.property('id').equal('5');
                expect(result).to.have.property('data').to.have.property('species').to.have.property('name').equal(testData.singleSpeciesRespBody['name']);
                expect(result).to.have.property('data').to.have.property('species').to.have.property('classification').equal(testData.singleSpeciesRespBody['classification']);
                expect(result).to.have.property('data').to.have.property('species').to.have.property('films').length(4);
                verifyFilms(result['data']['species']['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
        it('test the species list integration', done => {
            setupStubsWithFilms(testData.multiSpeciesUrl, testData.multiSpeciesRespBody);
            graphql(schema, '{species_list {id name classification films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('species_list').to.have.length(1);
                expect(result['data']['species_list'][0]).to.have.property('id').to.equal('5');
                expect(result['data']['species_list'][0]).to.have.property('name').to.equal(testData.singleSpeciesRespBody['name']);
                expect(result['data']['species_list'][0]).to.have.property('classification').to.equal(testData.singleSpeciesRespBody['classification']);
                expect(result['data']['species_list'][0]).to.have.property('films').length(4);
                verifyFilms(result['data']['species_list'][0]['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
    });

    describe('Test vehicles graphql() integration', () => {
        beforeEach(() => {
        });
        afterEach(() => {
            request.get.restore();
        });
        it('test the single vehicle integration', done => {
            setupStubsWithFilms(testData.singleVehicleUrl, testData.singleVehicleRespBody);
            graphql(schema, '{vehicle(id: 4) {id name manufacturer films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('vehicle').to.have.property('id').equal('4');
                expect(result).to.have.property('data').to.have.property('vehicle').to.have.property('name').equal(testData.singleVehicleRespBody['name']);
                expect(result).to.have.property('data').to.have.property('vehicle').to.have.property('manufacturer').equal(testData.singleVehicleRespBody['manufacturer']);
                expect(result).to.have.property('data').to.have.property('vehicle').to.have.property('films').length(4);
                verifyFilms(result['data']['vehicle']['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
        it('test the vehicles list integration', done => {
            setupStubsWithFilms(testData.multiVehicleUrl, testData.multiVehicleRespBody);
            graphql(schema, '{vehicle_list {id name manufacturer films {title release_date}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('vehicle_list').to.have.length(1);
                expect(result['data']['vehicle_list'][0]).to.have.property('id').to.equal('4');
                expect(result['data']['vehicle_list'][0]).to.have.property('name').to.equal(testData.singleVehicleRespBody['name']);
                expect(result['data']['vehicle_list'][0]).to.have.property('manufacturer').to.equal(testData.singleVehicleRespBody['manufacturer']);
                expect(result['data']['vehicle_list'][0]).to.have.property('films').length(4);
                verifyFilms(result['data']['vehicle_list'][0]['films']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
    });
    describe('Test films graphql() integration', () => {
        beforeEach(() => {
        });
        afterEach(() => {
            request.get.restore();
        });
        it('test the single film integration', done => {
            let stub = sinon.stub(request, 'get');
            stub.withArgs(testData.singleFilmUrl).yields(null, okResp, JSON.stringify(testData.singleFilmRespBody));
            stub.withArgs(testData.person1Url).yields(null, okResp, JSON.stringify(testData.person1RespBody));
            stub.withArgs(testData.person2Url).yields(null, okResp, JSON.stringify(testData.person2RespBody));
            stub.withArgs(testData.person3Url).yields(null, okResp, JSON.stringify(testData.person3RespBody));
            stub.yields(null, missingResp, '');  // Default behaviour
            graphql(schema, '{ film(id: 1) {id title director people {name}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('film').to.have.property('id').equal('1');
                expect(result).to.have.property('data').to.have.property('film').to.have.property('title').equal(testData.singleFilmRespBody['title']);
                expect(result).to.have.property('data').to.have.property('film').to.have.property('director').equal(testData.singleFilmRespBody['director']);
                expect(result).to.have.property('data').to.have.property('film').to.have.property('people').length(3);
                expect(result['data']['film']['people'][0]).to.have.property('name').equal(testData.person1RespBody['name']);
                expect(result['data']['film']['people'][1]).to.have.property('name').equal(testData.person2RespBody['name']);
                expect(result['data']['film']['people'][2]).to.have.property('name').equal(testData.person3RespBody['name']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
        it('test the vehicles list integration', done => {
            let stub = sinon.stub(request, 'get');
            stub.withArgs(testData.multiFilmUrl).yields(null, okResp, JSON.stringify(testData.multiFilmRespBody));
            stub.withArgs(testData.person1Url).yields(null, okResp, JSON.stringify(testData.person1RespBody));
            stub.withArgs(testData.person2Url).yields(null, okResp, JSON.stringify(testData.person2RespBody));
            stub.withArgs(testData.person3Url).yields(null, okResp, JSON.stringify(testData.person3RespBody));
            stub.yields(null, missingResp, '');  // Default behaviour
            graphql(schema, '{film_list {id title director people {name}}}', global).then((result) => {
                expect(result).to.have.property('data').to.have.property('film_list').to.have.length(1);
                expect(result['data']['film_list'][0]).to.have.property('id').to.equal('1');
                expect(result['data']['film_list'][0]).to.have.property('title').to.equal(testData.singleFilmRespBody['title']);
                expect(result['data']['film_list'][0]).to.have.property('director').to.equal(testData.singleFilmRespBody['director']);
                expect(result['data']['film_list'][0]).to.have.property('people').length(3);
                const characterArray = result['data']['film_list'][0]['people'];
                expect(characterArray[0]).to.have.property('name').equal(testData.person1RespBody['name']);
                expect(characterArray[1]).to.have.property('name').equal(testData.person2RespBody['name']);
                expect(characterArray[2]).to.have.property('name').equal(testData.person3RespBody['name']);
                done();
            }).catch((err) => {
                Logger.error(err.stack);
                done(err);
            });
        });
    });
});

function setupStubsWithFilms(testedUrl, testedResBody) {
    let stub = sinon.stub(request, 'get');
    stub.withArgs(testedUrl).yields(null, okResp, JSON.stringify(testedResBody));
    stub.withArgs(testData.film1Url).yields(null, okResp, JSON.stringify(testData.film1RespBody));
    stub.withArgs(testData.film2Url).yields(null, okResp, JSON.stringify(testData.film2RespBody));
    stub.withArgs(testData.film3Url).yields(null, okResp, JSON.stringify(testData.film3RespBody));
    stub.withArgs(testData.film4Url).yields(null, okResp, JSON.stringify(testData.film4RespBody));
    stub.yields(null, missingResp, '');  // Default behaviour
}

function verifyFilms(filmArray) {
    expect(filmArray[0]).to.have.property('title').equal(testData.film1RespBody['title']);
    expect(filmArray[0]).to.have.property('release_date').equal(testData.film1RespBody['release_date']);
    expect(filmArray[1]).to.have.property('title').equal(testData.film2RespBody['title']);
    expect(filmArray[1]).to.have.property('release_date').equal(testData.film2RespBody['release_date']);
    expect(filmArray[2]).to.have.property('title').equal(testData.film3RespBody['title']);
    expect(filmArray[2]).to.have.property('release_date').equal(testData.film3RespBody['release_date']);
    expect(filmArray[3]).to.have.property('title').equal(testData.film4RespBody['title']);
    expect(filmArray[3]).to.have.property('release_date').equal(testData.film4RespBody['release_date']);
}
