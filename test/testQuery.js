const expect = require("chai").expect;
const graphql = require('graphql');

const query = require('../src/schema/querys');

describe('Test queries, make sure query is present and correct', () => {
    it('query not null', function (done) {
        expect(query).to.not.be.null;
        done();
    });
    it('query is a graphql schema', function (done) {
        expect(query).to.be.an.instanceof(graphql.GraphQLSchema);
        done();
    });
});