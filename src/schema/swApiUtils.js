'use strict';
const request = require('request');

function makeSwApiRequest(url) {
    let type = getTypeFromUrl(url);
    let id = getIdFromUrl(url);
    return new Promise((resolve, reject) => {
        request.get(url, (error, res, body) => {
            if (!error && res.statusCode === 200) {
                let respBody = JSON.parse(body);
                let result;
                if (id != null) {
                    result = parseItem(type, id, respBody);
                } else {
                    result = parseItemArray(type, respBody);
                }
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
}

function makeSwApiRequests(urls) {
    let promises = [];
    urls.forEach(url => {
        promises.push(makeSwApiRequest(url));
    });
    return Promise.all(promises);
}

function parseItem(type, id, respBody) {
    let result = {};
    switch (type) {
        case 'starships':
            result = extractShip(respBody);
            break;
        case 'people':
            result = extractPerson(respBody);
            break;
        case 'planets':
            result = extractPlanet(respBody);
            break;
        case 'films':
            result = extractFilm(respBody);
            break;
        case 'species':
            result = extractSpecies(respBody);
            break;
        case 'vehicles':
            result = extractVehicle(respBody);
            break;
        default:
    }
    result['id'] = id;
    return result;
}

function parseItemArray(type, listRespBody) {
    let results = [];
    listRespBody['results'].forEach(respBody => {
        results.push(parseItem(type, getIdFromUrl(respBody['url']), respBody));
    });
    return results;
}

function getSwApiUrl(type, itemId) {
    let url = 'https://swapi.co/api/' + type;
    if (itemId != null) {
        url += '/' + itemId + '/';
    }
    return url;
}

function getTypeFromUrl(url) {
    return url.split("/")[4];
}

function getIdFromUrl(url) {
    return url.split("/")[5];
}

function extractShip(response) {
    let ship = {};
    ship['name'] = response['name'];
    ship['model'] = response['model'];
    ship['manufacturer'] = response['manufacturer'];
    ship['crew'] = response['crew'];
    ship['passengers'] = response['passengers'];
    ship['swapiFilmURLs'] = response['films'];
    return ship;
}

function extractPerson(response) {
    let person = {};
    person['name'] = response['name'];
    person['height'] = response['height'];
    person['mass'] = response['mass'];
    person['hair_color'] = response['hair_color'];
    person['eye_color'] = response['eye_color'];
    person['birth_year'] = response['birth_year'];
    person['gender'] = response['gender'];
    person['swapiFilmURLs'] = response['films'];
    return person;
}

function extractPlanet(response) {
    let planet = {};
    planet['name'] = response['name'];
    planet['rotation_period'] = response['rotation_period'];
    planet['orbital_period'] = response['orbital_period'];
    planet['diameter'] = response['diameter'];
    planet['climate'] = response['climate'];
    planet['gravity'] = response['gravity'];
    planet['terrain'] = response['terrain'];
    planet['surface_water'] = response['surface_water'];
    planet['population'] = response['population'];
    planet['swapiFilmURLs'] = response['films'];
    return planet;
}

function extractFilm(response) {
    let film = {};
    film['title'] = response['title'];
    film['episode_id'] = response['episode_id'];
    film['opening_crawl'] = response['opening_crawl'];
    film['director'] = response['director'];
    film['producer'] = response['producer'];
    film['release_date'] = response['release_date'];
    film['swapiPeopleURLs'] = response['characters'];
    return film;
}

function extractSpecies(response) {
    let species = {};
    species['name'] = response['name'];
    species['classification'] = response['classification'];
    species['designation'] = response['designation'];
    species['average_height'] = response['average_height'];
    species['skin_colors'] = response['skin_colors'];
    species['hair_colors'] = response['hair_colors'];
    species['eye_colors'] = response['eye_colors'];
    species['average_lifespan'] = response['average_lifespan'];
    species['homeworld'] = response['homeworld'];
    species['language'] = response['language'];
    species['swapiFilmURLs'] = response['films'];
    return species;
}

function extractVehicle(response) {
    let vehicle = {};
    vehicle['name'] = response['name'];
    vehicle['model'] = response['model'];
    vehicle['manufacturer'] = response['manufacturer'];
    vehicle['cost_in_credits'] = response['cost_in_credits'];
    vehicle['length'] = response['length'];
    vehicle['max_atmosphering_speed'] = response['max_atmosphering_speed'];
    vehicle['crew'] = response['crew'];
    vehicle['passengers'] = response['passengers'];
    vehicle['cargo_capacity'] = response['cargo_capacity'];
    vehicle['consumables'] = response['consumables'];
    vehicle['vehicle_class'] = response['vehicle_class'];
    vehicle['swapiFilmURLs'] = response['films'];
    return vehicle;
}

module.exports = {
    makeSwApiRequest: makeSwApiRequest,
    makeSwApiRequests: makeSwApiRequests,
    getSwApiUrl: getSwApiUrl
};
