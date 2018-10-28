const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const request = require('request');

const swApiUtils = require('../src/schema/swApiUtils');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Test swApiUtils getSwApiUrl URL construction', () => {
    describe('Valid constructions', () => {
        it('should return a URL', (done) => {
            expect(swApiUtils.getSwApiUrl('will', '3')).to.equal('https://swapi.co/api/will/3');
            done();
        });
        it('should return a itemless URL', (done) => {
            expect(swApiUtils.getSwApiUrl('will')).to.equal('https://swapi.co/api/will');
            done();
        });
    });
    describe('Invalid constructions', () => {
        it('should have undefined type in URL', done => {
            expect(swApiUtils.getSwApiUrl()).to.equal('https://swapi.co/api/undefined');
            done();
        });
    });
});

describe('Test the swapi makeSwApiRequest functions', () => {
    const okResp = {statusCode: 200, headers: {'content-type': 'application/json'}};
    const failResp = {statusCode: 500};
    const filmBody = {title: 'somemovietitle'};
    const filmsBody = {results: [{title: 'somemovietitle0', url: 'httpz://swswswswsw/ppp/films/0/'}]};
    beforeEach(() => {
    });
    afterEach(() => {
        request.get.restore();
    });
    it('fails with invalid status code', () => {
        const url = 'httpz://swswswswsw/ppp/films/999';
        sinon.stub(request, 'get').withArgs(url).yields(null, failResp, '');
        return expect(swApiUtils.makeSwApiRequest(url)).to.be.eventually.rejected;
    });
    it('returns right title content with single film URL', () => {
        const url = 'httpz://swswswswsw/ppp/films/999';
        sinon.stub(request, 'get').withArgs(url).yields(null, okResp, JSON.stringify(filmBody));
        return expect(swApiUtils.makeSwApiRequest(url)).to.eventually.have.property('title').equal(filmBody.title);
    });
    it('returns right id content with single film URL', () => {
        const url = 'httpz://swswswswsw/ppp/films/999';
        sinon.stub(request, 'get').withArgs(url).yields(null, okResp, JSON.stringify(filmBody));
        return expect(swApiUtils.makeSwApiRequest(url)).to.eventually.have.property('id').equal('999');
    });
    it('returns right length with array of film URLs', () => {
        const urls = ['httpz://swswswswsw/ppp/films/999'];
        sinon.stub(request, 'get').withArgs(urls[0]).yields(null, okResp, JSON.stringify(filmsBody));
        return expect(swApiUtils.makeSwApiRequests(urls)).to.eventually.have.length(1);
    });
    it('returns right content with array of film URLs', (done) => {
        const urls = ['httpz://swswswswsw/ppp/films/999'];
        sinon.stub(request, 'get').withArgs(urls[0]).yields(null, okResp, JSON.stringify(filmBody));
        swApiUtils.makeSwApiRequests(urls).then((results) => {
                results.forEach(result => {
                    expect(result).to.have.property('id').to.equal('999');
                    expect(result).to.have.property('title').to.equal(filmBody.title);
                });
                done();
            }
        ).catch((err) => {
            console.error(err);
            done(err);
        })
    });
    it('returns right content with single starship URL', () => {
        const url = 'httpz://swswswswsw/ppp/starships/999/';
        const name = 'testing death star';
        const responseBody = {name: name};
        return makeTheTestRequest(url, okResp, responseBody, name);
    });
    it('returns right content with single person URL', () => {
        const url = 'httpz://swswswswsw/ppp/people/999/';
        const name = 'testing person';
        const responseBody = {name: name};
        return makeTheTestRequest(url, okResp, responseBody, name);
    });
    it('returns right content with single planet URL', () => {
        const url = 'httpz://swswswswsw/ppp/planets/999/';
        const name = 'testing planet';
        const responseBody = {name: name};
        return makeTheTestRequest(url, okResp, responseBody, name);
    });
    it('returns right content with single species URL', () => {
        const url = 'httpz://swswswswsw/ppp/species/999/';
        const name = 'testing species';
        const responseBody = {name: name};
        return makeTheTestRequest(url, okResp, responseBody, name);
    });
    it('returns right content with single vehicles URL', () => {
        const url = 'httpz://swswswswsw/ppp/vehicles/999/';
        const name = 'testing vehicle';
        const responseBody = {name: name};
        return makeTheTestRequest(url, okResp, responseBody, name);
    });

    function makeTheTestRequest(url, okResp, responseBody, name) {
        sinon.stub(request, 'get').withArgs(url).yields(null, okResp, JSON.stringify(responseBody));
        return expect(swApiUtils.makeSwApiRequest(url))
            .to.eventually.have.property('name')
            .equal(name);
    }
});

