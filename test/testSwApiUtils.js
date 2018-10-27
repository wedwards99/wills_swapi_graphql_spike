const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const request = require('request');

const swApiUtils = require('../src/schema/swApiUtils');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Test swApiUtils getSwApiUrl URL construction', () => {
    describe('Valid constructions', function () {
        it('should return a URL', () => {
            expect(swApiUtils.getSwApiUrl('will', '3')).to.equal('https://swapi.co/api/will/3');
        });
        it('should return a itemless URL', () => {
            expect(swApiUtils.getSwApiUrl('will')).to.equal('https://swapi.co/api/will');
        });
    });
    describe('Invalid constructions', () => {
        it('should have undefined type in URL', function () {
            expect(swApiUtils.getSwApiUrl()).to.equal('https://swapi.co/api/undefined');
        });
    });
});

describe('Test the swapi makeSwApiRequest functions', () => {
    const okResp = {statusCode: 200, headers: {'content-type': 'application/json'}};
    const failResp = {statusCode: 500};
    const filmBody = {title: 'somemovietitle'};
    const shipBody = {name: 'testing death star'};
    const personBody = {name: 'testing person'};
    const planetBody = {name: 'testing planet'};
    const speciesBody = {name: 'testing species'};
    const vehicleBody = {name: 'testing vehicle'};
    const filmsBody = {results: [{title: 'somemovietitle0', url: 'httpz://swswswswsw/ppp/films/0/'}]};
    beforeEach(() => {
    });
    afterEach(() => {
        request.get.restore();
    });
    it('fails with invalid status code', () => {
        sinon.stub(request, 'get').yields(null, failResp, '');
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/films/999/'))
            .to.be.eventually.rejected;
    });
    it('returns right title content with single film URL', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(filmBody));
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/films/999/'))
            .to.eventually.have.property('title')
            .equal('somemovietitle');
    });
    it('returns right id content with single film URL', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(filmBody));
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/films/999/'))
            .to.eventually.have.property('id')
            .equal('999');
    });
    it('returns right length with array of film URLs', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(filmsBody));
        return expect(swApiUtils.makeSwApiRequests(['httpz://swswswswsw/ppp/films']))
            .to.eventually.have.length(1);
    });
    it('returns right content with array of film URLs', (done) => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(filmBody));
        swApiUtils.makeSwApiRequests(['httpz://swswswswsw/ppp/films/999']).then((results) => {
                results.forEach(result => {
                    expect(result['id']).to.equal('999');
                    expect(result['title']).to.equal('somemovietitle');
                });
                done();
            }
        ).catch((err) => {
            console.error(err);
            done(err);
        })
    });
    it('returns right content with single starship URL', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(shipBody));
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/starships/999/'))
            .to.eventually.have.property('name')
            .equal('testing death star');
    });
    it('returns right content with single person URL', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(personBody));
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/people/999/'))
            .to.eventually.have.property('name')
            .equal('testing person');
    });
    it('returns right content with single planet URL', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(planetBody));
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/planets/999/'))
            .to.eventually.have.property('name')
            .equal('testing planet');
    });
    it('returns right content with single species URL', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(speciesBody));
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/species/999/'))
            .to.eventually.have.property('name')
            .equal('testing species');
    });
    it('returns right content with single vehicles URL', () => {
        sinon.stub(request, 'get').yields(null, okResp, JSON.stringify(vehicleBody));
        return expect(swApiUtils.makeSwApiRequest('httpz://swswswswsw/ppp/vehicles/999/'))
            .to.eventually.have.property('name')
            .equal('testing vehicle');
    });
});