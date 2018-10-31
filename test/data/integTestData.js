'use strict';
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Define testing data for several films that can be pointed to as 'was in' by starships, people,
// planets, species and vehicles.
/////////////////////////////////////////////////////////////////////////////////////////////////////
const film1Url = 'https://swapi.co/api/films/2/';
const film1RespBody = {title: 'The Empire Strikes Back', episode_id: 5, opening_crawl: 'Crawl2',
    director: 'Irvin Kershner', producer: 'Gary Kurtz, Rick McCallum', release_date: '1980-05-17',
    characters: ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/2/', 'https://swapi.co/api/people/3/', 'https://swapi.co/api/people/4/', 'https://swapi.co/api/people/5/', 'https://swapi.co/api/people/10/', 'https://swapi.co/api/people/13/', 'https://swapi.co/api/people/14/', 'https://swapi.co/api/people/18/', 'https://swapi.co/api/people/20/', 'https://swapi.co/api/people/21/', 'https://swapi.co/api/people/22/', 'https://swapi.co/api/people/23/', 'https://swapi.co/api/people/24/', 'https://swapi.co/api/people/25/', 'https://swapi.co/api/people/26/'],
    planets: ['https://swapi.co/api/planets/4/', 'https://swapi.co/api/planets/5/', 'https://swapi.co/api/planets/6/', 'https://swapi.co/api/planets/27/'],
    starships: ['https://swapi.co/api/starships/15/', 'https://swapi.co/api/starships/10/', 'https://swapi.co/api/starships/11/', 'https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/21/', 'https://swapi.co/api/starships/22/', 'https://swapi.co/api/starships/23/', 'https://swapi.co/api/starships/3/', 'https://swapi.co/api/starships/17/'],
    vehicles: ['https://swapi.co/api/vehicles/8/', 'https://swapi.co/api/vehicles/14/', 'https://swapi.co/api/vehicles/16/', 'https://swapi.co/api/vehicles/18/', 'https://swapi.co/api/vehicles/19/', 'https://swapi.co/api/vehicles/20/'],
    species: ['https://swapi.co/api/species/6/', 'https://swapi.co/api/species/7/', 'https://swapi.co/api/species/3/', 'https://swapi.co/api/species/2/', 'https://swapi.co/api/species/1/'],
    created: '2014-12-12T11:26:24.656000Z', edited: '2017-04-19T10:57:29.544256Z', url: 'https://swapi.co/api/films/2/'
};

const film2Url = 'https://swapi.co/api/films/3/';
const film2RespBody = {title: 'Return of the Jedi', episode_id: 6, opening_crawl: 'Crawl3',
    director: 'Richard Marquand', producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum', release_date: '1983-05-25',
    characters: ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/2/', 'https://swapi.co/api/people/3/', 'https://swapi.co/api/people/4/', 'https://swapi.co/api/people/5/', 'https://swapi.co/api/people/10/', 'https://swapi.co/api/people/13/', 'https://swapi.co/api/people/14/', 'https://swapi.co/api/people/16/', 'https://swapi.co/api/people/18/', 'https://swapi.co/api/people/20/', 'https://swapi.co/api/people/21/', 'https://swapi.co/api/people/22/', 'https://swapi.co/api/people/25/', 'https://swapi.co/api/people/27/', 'https://swapi.co/api/people/28/', 'https://swapi.co/api/people/29/', 'https://swapi.co/api/people/30/', 'https://swapi.co/api/people/31/', 'https://swapi.co/api/people/45/'],
    planets: ['https://swapi.co/api/planets/5/', 'https://swapi.co/api/planets/7/', 'https://swapi.co/api/planets/8/', 'https://swapi.co/api/planets/9/', 'https://swapi.co/api/planets/1/'],
    starships: ['https://swapi.co/api/starships/15/', 'https://swapi.co/api/starships/10/', 'https://swapi.co/api/starships/11/', 'https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/22/', 'https://swapi.co/api/starships/23/', 'https://swapi.co/api/starships/27/', 'https://swapi.co/api/starships/28/', 'https://swapi.co/api/starships/29/', 'https://swapi.co/api/starships/3/', 'https://swapi.co/api/starships/17/', 'https://swapi.co/api/starships/2/'],
    vehicles: ['https://swapi.co/api/vehicles/8/', 'https://swapi.co/api/vehicles/16/', 'https://swapi.co/api/vehicles/18/', 'https://swapi.co/api/vehicles/19/', 'https://swapi.co/api/vehicles/24/', 'https://swapi.co/api/vehicles/25/', 'https://swapi.co/api/vehicles/26/', 'https://swapi.co/api/vehicles/30/'],
    species: ['https://swapi.co/api/species/1/', 'https://swapi.co/api/species/2/', 'https://swapi.co/api/species/3/', 'https://swapi.co/api/species/5/', 'https://swapi.co/api/species/6/', 'https://swapi.co/api/species/8/', 'https://swapi.co/api/species/9/', 'https://swapi.co/api/species/10/', 'https://swapi.co/api/species/15/'],
    created: '2014-12-18T10:39:33.255000Z', edited: '2015-04-11T09:46:05.220365Z', url: 'https://swapi.co/api/films/3/'
};

const film3Url = 'https://swapi.co/api/films/7/';
const film3RespBody = {title: 'The Force Awakens', episode_id: 7, opening_crawl: 'Crawl7',
    director: 'J. J. Abrams', producer: 'Kathleen Kennedy, J. J. Abrams, Bryan Burk', release_date: '2015-12-11',
    characters: ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/3/', 'https://swapi.co/api/people/5/', 'https://swapi.co/api/people/13/', 'https://swapi.co/api/people/14/', 'https://swapi.co/api/people/27/', 'https://swapi.co/api/people/84/', 'https://swapi.co/api/people/85/', 'https://swapi.co/api/people/86/', 'https://swapi.co/api/people/87/', 'https://swapi.co/api/people/88/'],
    planets: ['https://swapi.co/api/planets/61/'],
    starships: ['https://swapi.co/api/starships/77/', 'https://swapi.co/api/starships/10/'],
    vehicles: [],
    species: ['https://swapi.co/api/species/3/', 'https://swapi.co/api/species/2/', 'https://swapi.co/api/species/1/'],
    created: '2015-04-17T06:51:30.504780Z', edited: '2015-12-17T14:31:47.617768Z', url: 'https://swapi.co/api/films/7/'
};
const film4Url = 'https://swapi.co/api/films/1/';
const film4RespBody = {title: 'A New Hope', episode_id: 4, opening_crawl: 'Crawl1',
    director: 'George Lucas', producer: 'Gary Kurtz, Rick McCallum', release_date: '1977-05-25',
    characters: ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/2/', 'https://swapi.co/api/people/3/', 'https://swapi.co/api/people/4/', 'https://swapi.co/api/people/5/', 'https://swapi.co/api/people/6/', 'https://swapi.co/api/people/7/', 'https://swapi.co/api/people/8/', 'https://swapi.co/api/people/9/', 'https://swapi.co/api/people/10/', 'https://swapi.co/api/people/12/', 'https://swapi.co/api/people/13/', 'https://swapi.co/api/people/14/', 'https://swapi.co/api/people/15/', 'https://swapi.co/api/people/16/', 'https://swapi.co/api/people/18/', 'https://swapi.co/api/people/19/', 'https://swapi.co/api/people/81/'],
    planets: ['https://swapi.co/api/planets/2/', 'https://swapi.co/api/planets/3/', 'https://swapi.co/api/planets/1/'],
    starships: ['https://swapi.co/api/starships/2/', 'https://swapi.co/api/starships/3/', 'https://swapi.co/api/starships/5/', 'https://swapi.co/api/starships/9/', 'https://swapi.co/api/starships/10/', 'https://swapi.co/api/starships/11/', 'https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/13/'],
    vehicles: ['https://swapi.co/api/vehicles/4/', 'https://swapi.co/api/vehicles/6/', 'https://swapi.co/api/vehicles/7/', 'https://swapi.co/api/vehicles/8/'],
    species: ['https://swapi.co/api/species/5/', 'https://swapi.co/api/species/3/', 'https://swapi.co/api/species/2/', 'https://swapi.co/api/species/1/', 'https://swapi.co/api/species/4/'],
    created: '2014-12-10T14:23:31.880000Z', edited: '2015-04-11T09:46:52.774897Z', url: 'https://swapi.co/api/films/1/'
};

const films = [film1Url, film2Url, film3Url, film4Url];

/////////////////////////////////////////////////////////////////////////////////////
// Define testing data for starships, people, planets, species and vehicle queries.
/////////////////////////////////////////////////////////////////////////////////////
const singleStarShipUrl = 'https://swapi.co/api/starships/10/';
const singleStarShipRespBody = {
    name: 'A mock ship', model: 'A mock model', manufacturer: 'A mock manufacturer', cost_in_credits: '100000', length: '34.37', max_atmosphering_speed: '1050',
    crew: '4', passengers: '6', cargo_capacity: '100000', consumables: '2 months', hyperdrive_rating: '0.5', MGLT: '75', starship_class: 'Light freighter',
    pilots: ['https://swapi.co/api/people/13/', 'https://swapi.co/api/people/14/', 'https://swapi.co/api/people/25/', 'https://swapi.co/api/people/31/'],
    films: films,
    created: '2014-12-10T16:59:45.094000Z', edited: '2014-12-22T17:35:44.464156Z', url: 'https://swapi.co/api/starships/10/'
};
const multiStarShipUrl = 'https://swapi.co/api/starships';
const multiStarShipRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singleStarShipRespBody]};

const singlePersonUrl = 'https://swapi.co/api/people/2/';
const singlePersonRespBody = {
    name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', eye_color: 'yellow', birth_year: '112BBY', gender: 'n/a',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: films,
    species: ['https://swapi.co/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z', edited: '2014-12-20T21:17:50.309000Z', url: 'https://swapi.co/api/people/2/'
};
const multiPersonUrl = 'https://swapi.co/api/people';
const multiPersonRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singlePersonRespBody]};

const singlePlanetUrl = 'https://swapi.co/api/planets/7/';
const singlePlanetRespBody = {name: 'Endor', rotation_period: '18', orbital_period: '402', diameter: '4900', climate: 'temperate',
    gravity: '0.85 standard', terrain: 'forests, mountains, lakes', surface_water: '8', population: '30000000',
    residents: ['https://swapi.co/api/people/30/'],
    films: films,
    created: '2014-12-10T11:50:29.349000Z', edited: '2014-12-20T20:58:18.429000Z', url: 'https://swapi.co/api/planets/7/'
};
const multiPlanetUrl = 'https://swapi.co/api/planets';
const multiPlanetRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singlePlanetRespBody]};

const singleSpeciesUrl = 'https://swapi.co/api/species/5/';
const singleSpeciesRespBody = { name: 'Hutt', classification: 'gastropod', designation: 'sentient', average_height: '300', skin_colors: 'green, brown, tan',
    hair_colors: 'n/a', eye_colors: 'yellow, red', average_lifespan: '1000', homeworld: 'https://swapi.co/api/planets/24/', language: 'Huttese',
    people: [ 'https://swapi.co/api/people/16/' ],
    films: films,
    created: '2014-12-10T17:12:50.410000Z', edited: '2014-12-20T21:36:42.146000Z', url: 'https://swapi.co/api/species/5/'};
const multiSpeciesUrl = 'https://swapi.co/api/species';
const multiSpeciesRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singleSpeciesRespBody]};

const singleVehicleUrl = 'https://swapi.co/api/vehicles/4/';
const singleVehicleRespBody = { name: 'Sand Crawler', model: 'Digger Crawler', manufacturer: 'Corellia Mining Corporation', cost_in_credits: '150000', length: '36.8',
    max_atmosphering_speed: '30', crew: '46', passengers: '30', cargo_capacity: '50000', consumables: '2 months', vehicle_class: 'wheeled',
    pilots: [],
    films: films,
    created: '2014-12-10T15:36:25.724000Z', edited: '2014-12-22T18:21:15.523587Z', url: 'https://swapi.co/api/vehicles/4/' };
const multiVehicleUrl = 'https://swapi.co/api/vehicles';
const multiVehicleRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singleVehicleRespBody]};

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Define testing data for several characters that can be pointed to as 'had cast member' by films.
/////////////////////////////////////////////////////////////////////////////////////////////////////
const person1Url = 'https://swapi.co/api/people/1/';
const person1RespBody = { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/',
    films: films,
    species: [ 'https://swapi.co/api/species/1/' ],
    vehicles: [ 'https://swapi.co/api/vehicles/14/', 'https://swapi.co/api/vehicles/30/' ],
    starships: [ 'https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/22/' ],
    created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1' };

const person2Url = 'https://swapi.co/api/people/2/';
const person2RespBody = { name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', eye_color: 'yellow', birth_year: '112BBY', gender: 'n/a', homeworld: 'https://swapi.co/api/planets/1/',
    films: films,
    species: [ 'https://swapi.co/api/species/2/' ],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z', edited: '2014-12-20T21:17:50.309000Z', url: 'https://swapi.co/api/people/2' };

const person3Url = 'https://swapi.co/api/people/3/';
const person3RespBody = { name: 'R2-D2', height: '96', mass: '32', hair_color: 'n/a', skin_color: 'white, blue', eye_color: 'red', birth_year: '33BBY', gender: 'n/a', homeworld: 'https://swapi.co/api/planets/8/',
    films: films,
    species: [ 'https://swapi.co/api/species/2/' ],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:11:50.376000Z', edited: '2014-12-20T21:17:50.311000Z', url: 'https://swapi.co/api/people/3' };

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Define testing data for film queries
/////////////////////////////////////////////////////////////////////////////////////////////////////
const singleFilmUrl = 'https://swapi.co/api/films/1/';
const singleFilmRespBody = { title: 'A New Hope', episode_id: 4,
    opening_crawl: 'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire\'s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire\'s\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....',
    director: 'George Lucas', producer: 'Gary Kurtz, Rick McCallum', release_date: '1977-05-25',
    characters: [person1Url, person2Url, person3Url],
    planets: [ 'https://swapi.co/api/planets/2/', 'https://swapi.co/api/planets/3/', 'https://swapi.co/api/planets/1/'],
    starships: [ 'https://swapi.co/api/starships/2/', 'https://swapi.co/api/starships/3/', 'https://swapi.co/api/starships/5/'],
    vehicles: [ 'https://swapi.co/api/vehicles/4/', 'https://swapi.co/api/vehicles/6/', 'https://swapi.co/api/vehicles/7/'],
    species: [ 'https://swapi.co/api/species/2/', 'https://swapi.co/api/species/1/', 'https://swapi.co/api/species/4/' ],
    created: '2014-12-10T14:23:31.880000Z', edited: '2015-04-11T09:46:52.774897Z', url: 'https://swapi.co/api/films/1/' };
const multiFilmUrl = 'https://swapi.co/api/films';
const multiFilmRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singleFilmRespBody]};

module.exports = {
    film1Url: film1Url,
    film1RespBody: film1RespBody,
    film2Url: film2Url,
    film2RespBody: film2RespBody,
    film3Url: film3Url,
    film3RespBody: film3RespBody,
    film4Url: film4Url,
    film4RespBody: film4RespBody,
    singleStarShipUrl: singleStarShipUrl,
    singleStarShipRespBody: singleStarShipRespBody,
    multiStarShipUrl: multiStarShipUrl,
    multiStarShipRespBody: multiStarShipRespBody,
    singlePersonUrl: singlePersonUrl,
    singlePersonRespBody: singlePersonRespBody,
    multiPersonUrl: multiPersonUrl,
    multiPersonRespBody: multiPersonRespBody,
    singlePlanetUrl: singlePlanetUrl,
    singlePlanetRespBody: singlePlanetRespBody,
    multiPlanetUrl: multiPlanetUrl,
    multiPlanetRespBody: multiPlanetRespBody,
    singleSpeciesUrl: singleSpeciesUrl,
    singleSpeciesRespBody: singleSpeciesRespBody,
    multiSpeciesUrl: multiSpeciesUrl,
    multiSpeciesRespBody: multiSpeciesRespBody,
    singleVehicleUrl: singleVehicleUrl,
    singleVehicleRespBody: singleVehicleRespBody,
    multiVehicleUrl: multiVehicleUrl,
    multiVehicleRespBody: multiVehicleRespBody,

    person1Url: person1Url,
    person1RespBody: person1RespBody,
    person2Url: person2Url,
    person2RespBody: person2RespBody,
    person3Url: person3Url,
    person3RespBody: person3RespBody,
    singleFilmUrl: singleFilmUrl,
    singleFilmRespBody: singleFilmRespBody,
    multiFilmUrl: multiFilmUrl,
    multiFilmRespBody: multiFilmRespBody
};


