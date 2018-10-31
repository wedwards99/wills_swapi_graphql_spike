'use strict';
const graphql = require('graphql');
const types = require('./types');
const swApiUtils = require('./swApiUtils');

const {GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLID} = graphql;

const query = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        ship: {
            type: types.shipType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                let url = swApiUtils.getSwApiUrl('starships', args.id);
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        ship_list: {
            type: new GraphQLList(types.shipType),
            resolve() {
                let url = swApiUtils.getSwApiUrl('starships');
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        person: {
            type: types.personType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                let url = swApiUtils.getSwApiUrl('people', args.id);
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        person_list: {
            type: new GraphQLList(types.personType),
            resolve() {
                let url = swApiUtils.getSwApiUrl('people');
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        planet: {
            type: types.planetType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                let url = swApiUtils.getSwApiUrl('planets', args.id);
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        planet_list: {
            type: new GraphQLList(types.planetType),
            resolve() {
                let url = swApiUtils.getSwApiUrl('planets');
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        film: {
            type: types.filmType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                let url = swApiUtils.getSwApiUrl('films', args.id);
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        film_list: {
            type: new GraphQLList(types.filmType),
            resolve() {
                let url = swApiUtils.getSwApiUrl('films');
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        species: {
            type: types.speciesType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                let url = swApiUtils.getSwApiUrl('species', args.id);
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        species_list: {
            type: new GraphQLList(types.speciesType),
            resolve() {
                let url = swApiUtils.getSwApiUrl('species');
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        vehicle: {
            type: types.vehicleType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                let url = swApiUtils.getSwApiUrl('vehicles', args.id);
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        },
        vehicle_list: {
            type: new GraphQLList(types.vehicleType),
            resolve() {
                let url = swApiUtils.getSwApiUrl('vehicles');
                return swApiUtils.makeSwApiRequest(url).then(resp => resp);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: query
});