const swApiUtils = require('./swApiUtils');
const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLList} = graphql;

const shipType = new GraphQLObjectType({
    name: 'Ship',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        model: {type: GraphQLString},
        manufacturer: {type: GraphQLString},
        crew: {type: GraphQLString},
        passengers: {type: GraphQLString},
        swapiFilmURLs: {type: GraphQLList(GraphQLString)},
        films: {
            type: new GraphQLList(filmType),
            resolve(parent) {
                return swApiUtils.makeSwApiRequests(parent.swapiFilmURLs);
            }
        }
    })
});

const personType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        height: {type: GraphQLString},
        mass: {type: GraphQLString},
        hair_color: {type: GraphQLString},
        eye_color: {type: GraphQLString},
        birth_year: {type: GraphQLString},
        gender: {type: GraphQLString},
        swapiFilmURLs: {type: GraphQLList(GraphQLString)},
        films: {
            type: new GraphQLList(filmType),
            resolve(parent) {
                return swApiUtils.makeSwApiRequests(parent.swapiFilmURLs);
            }
        }
    })
});

const planetType = new GraphQLObjectType({
    name: 'Planet',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        rotation_period: {type: GraphQLString},
        orbital_period: {type: GraphQLString},
        diameter: {type: GraphQLString},
        climate: {type: GraphQLString},
        gravity: {type: GraphQLString},
        terrain: {type: GraphQLString},
        surface_water: {type: GraphQLString},
        population: {type: GraphQLString},
        swapiFilmURLs: {type: GraphQLList(GraphQLString)},
        films: {
            type: new GraphQLList(filmType),
            resolve(parent) {
                return swApiUtils.makeSwApiRequests(parent.swapiFilmURLs);
            }
        }
    })
});

const filmType = new GraphQLObjectType({
    name: 'Film',
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        episode_id: {type: GraphQLString},
        opening_crawl: {type: GraphQLString},
        director: {type: GraphQLString},
        producer: {type: GraphQLString},
        release_date: {type: GraphQLString},
        swapiPeopleURLs: {type: GraphQLList(GraphQLString)},
        people: {
            type: new GraphQLList(personType),
            resolve(parent) {
                return swApiUtils.makeSwApiRequests(parent.swapiPeopleURLs);
            }
        }
    })
});

const speciesType = new GraphQLObjectType({
    name: 'Species',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        classification: {type: GraphQLString},
        designation: {type: GraphQLString},
        average_height: {type: GraphQLString},
        skin_colors: {type: GraphQLString},
        hair_colors: {type: GraphQLString},
        eye_colors: {type: GraphQLString},
        average_lifespan: {type: GraphQLString},
        homeworld: {type: GraphQLString},
        language: {type: GraphQLString},
        swapiFilmURLs: {type: GraphQLList(GraphQLString)},
        films: {
            type: new GraphQLList(filmType),
            resolve(parent) {
                return swApiUtils.makeSwApiRequests(parent.swapiFilmURLs);
            }
        }
    })
});

const vehicleType = new GraphQLObjectType({
    name: 'Vehicles',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        model: {type: GraphQLString},
        manufacturer: {type: GraphQLString},
        cost_in_credits: {type: GraphQLString},
        length: {type: GraphQLString},
        max_atmosphering_speed: {type: GraphQLString},
        crew: {type: GraphQLString},
        passengers: {type: GraphQLString},
        cargo_capacity: {type: GraphQLString},
        consumables: {type: GraphQLString},
        vehicle_class: {type: GraphQLString},
        swapiFilmURLs: {type: GraphQLList(GraphQLString)},
        films: {
            type: new GraphQLList(filmType),
            resolve(parent) {
                return swApiUtils.makeSwApiRequests(parent.swapiFilmURLs);
            }
        }
    })
});

module.exports = {
    shipType: shipType,
    personType: personType,
    planetType: planetType,
    filmType: filmType,
    speciesType: speciesType,
    vehicleType: vehicleType
};