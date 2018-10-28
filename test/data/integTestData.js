const films = ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/7/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/"];

const singleStarShipRespBody = {
    name: 'A mock ship', model: 'A mock model', manufacturer: 'A mock manufacturer', cost_in_credits: "100000", length: "34.37", max_atmosphering_speed: "1050",
    crew: "4", passengers: "6", cargo_capacity: "100000", consumables: "2 months", hyperdrive_rating: "0.5", MGLT: "75", starship_class: "Light freighter",
    pilots: ["https://swapi.co/api/people/13/", "https://swapi.co/api/people/14/", "https://swapi.co/api/people/25/", "https://swapi.co/api/people/31/"],
    films: films,
    created: "2014-12-10T16:59:45.094000Z", edited: "2014-12-22T17:35:44.464156Z", url: "https://swapi.co/api/starships/10/"
};
const multiStarShipRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singleStarShipRespBody]};

const singlePersonRespBody = {
    name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold", eye_color: "yellow", birth_year: "112BBY", gender: "n/a",
    homeworld: "https://swapi.co/api/planets/1/",
    films: films,
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z", edited: "2014-12-20T21:17:50.309000Z", url: "https://swapi.co/api/people/2/"
};
const multiPersonRespBody = {count: 999, next: 'somenextURL', previous: 'someprevURL', results: [singlePersonRespBody]};

const film1Url = 'https://swapi.co/api/films/2/';
const film1RespBody = {title: "The Empire Strikes Back", episode_id: 5, opening_crawl: "Crawl2",
    director: "Irvin Kershner", producer: "Gary Kurtz, Rick McCallum", release_date: "1980-05-17",
    characters: ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/4/", "https://swapi.co/api/people/5/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/13/", "https://swapi.co/api/people/14/", "https://swapi.co/api/people/18/", "https://swapi.co/api/people/20/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/22/", "https://swapi.co/api/people/23/", "https://swapi.co/api/people/24/", "https://swapi.co/api/people/25/", "https://swapi.co/api/people/26/"],
    planets: ["https://swapi.co/api/planets/4/", "https://swapi.co/api/planets/5/", "https://swapi.co/api/planets/6/", "https://swapi.co/api/planets/27/"],
    starships: ["https://swapi.co/api/starships/15/", "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/11/", "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/21/", "https://swapi.co/api/starships/22/", "https://swapi.co/api/starships/23/", "https://swapi.co/api/starships/3/", "https://swapi.co/api/starships/17/"],
    vehicles: ["https://swapi.co/api/vehicles/8/", "https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/16/", "https://swapi.co/api/vehicles/18/", "https://swapi.co/api/vehicles/19/", "https://swapi.co/api/vehicles/20/"],
    species: ["https://swapi.co/api/species/6/", "https://swapi.co/api/species/7/", "https://swapi.co/api/species/3/", "https://swapi.co/api/species/2/", "https://swapi.co/api/species/1/"],
    created: "2014-12-12T11:26:24.656000Z", edited: "2017-04-19T10:57:29.544256Z", url: "https://swapi.co/api/films/2/"
};

const film2Url = 'https://swapi.co/api/films/3/';
const film2RespBody = {title: "Return of the Jedi", episode_id: 6, opening_crawl: "Crawl3",
    director: "Richard Marquand", producer: "Howard G. Kazanjian, George Lucas, Rick McCallum", release_date: "1983-05-25",
    characters: ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/4/", "https://swapi.co/api/people/5/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/13/", "https://swapi.co/api/people/14/", "https://swapi.co/api/people/16/", "https://swapi.co/api/people/18/", "https://swapi.co/api/people/20/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/22/", "https://swapi.co/api/people/25/", "https://swapi.co/api/people/27/", "https://swapi.co/api/people/28/", "https://swapi.co/api/people/29/", "https://swapi.co/api/people/30/", "https://swapi.co/api/people/31/", "https://swapi.co/api/people/45/"],
    planets: ["https://swapi.co/api/planets/5/", "https://swapi.co/api/planets/7/", "https://swapi.co/api/planets/8/", "https://swapi.co/api/planets/9/", "https://swapi.co/api/planets/1/"],
    starships: ["https://swapi.co/api/starships/15/", "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/11/", "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/", "https://swapi.co/api/starships/23/", "https://swapi.co/api/starships/27/", "https://swapi.co/api/starships/28/", "https://swapi.co/api/starships/29/", "https://swapi.co/api/starships/3/", "https://swapi.co/api/starships/17/", "https://swapi.co/api/starships/2/"],
    vehicles: ["https://swapi.co/api/vehicles/8/", "https://swapi.co/api/vehicles/16/", "https://swapi.co/api/vehicles/18/", "https://swapi.co/api/vehicles/19/", "https://swapi.co/api/vehicles/24/", "https://swapi.co/api/vehicles/25/", "https://swapi.co/api/vehicles/26/", "https://swapi.co/api/vehicles/30/"],
    species: ["https://swapi.co/api/species/1/", "https://swapi.co/api/species/2/", "https://swapi.co/api/species/3/", "https://swapi.co/api/species/5/", "https://swapi.co/api/species/6/", "https://swapi.co/api/species/8/", "https://swapi.co/api/species/9/", "https://swapi.co/api/species/10/", "https://swapi.co/api/species/15/"],
    created: "2014-12-18T10:39:33.255000Z", edited: "2015-04-11T09:46:05.220365Z", url: "https://swapi.co/api/films/3/"
};

const film3Url = 'https://swapi.co/api/films/7/';
const film3RespBody = {title: "The Force Awakens", episode_id: 7, opening_crawl: "Crawl7",
    director: "J. J. Abrams", producer: "Kathleen Kennedy, J. J. Abrams, Bryan Burk", release_date: "2015-12-11",
    characters: ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/5/", "https://swapi.co/api/people/13/", "https://swapi.co/api/people/14/", "https://swapi.co/api/people/27/", "https://swapi.co/api/people/84/", "https://swapi.co/api/people/85/", "https://swapi.co/api/people/86/", "https://swapi.co/api/people/87/", "https://swapi.co/api/people/88/"],
    planets: ["https://swapi.co/api/planets/61/"],
    starships: ["https://swapi.co/api/starships/77/", "https://swapi.co/api/starships/10/"],
    vehicles: [],
    species: ["https://swapi.co/api/species/3/", "https://swapi.co/api/species/2/", "https://swapi.co/api/species/1/"],
    created: "2015-04-17T06:51:30.504780Z", edited: "2015-12-17T14:31:47.617768Z", url: "https://swapi.co/api/films/7/"
};
const film4Url = 'https://swapi.co/api/films/1/';
const film4RespBody = {title: "A New Hope", episode_id: 4, opening_crawl: "Crawl1",
    director: "George Lucas", producer: "Gary Kurtz, Rick McCallum", release_date: "1977-05-25",
    characters: ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/4/", "https://swapi.co/api/people/5/", "https://swapi.co/api/people/6/", "https://swapi.co/api/people/7/", "https://swapi.co/api/people/8/", "https://swapi.co/api/people/9/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/12/", "https://swapi.co/api/people/13/", "https://swapi.co/api/people/14/", "https://swapi.co/api/people/15/", "https://swapi.co/api/people/16/", "https://swapi.co/api/people/18/", "https://swapi.co/api/people/19/", "https://swapi.co/api/people/81/"],
    planets: ["https://swapi.co/api/planets/2/", "https://swapi.co/api/planets/3/", "https://swapi.co/api/planets/1/"],
    starships: ["https://swapi.co/api/starships/2/", "https://swapi.co/api/starships/3/", "https://swapi.co/api/starships/5/", "https://swapi.co/api/starships/9/", "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/11/", "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/13/"],
    vehicles: ["https://swapi.co/api/vehicles/4/", "https://swapi.co/api/vehicles/6/", "https://swapi.co/api/vehicles/7/", "https://swapi.co/api/vehicles/8/"],
    species: ["https://swapi.co/api/species/5/", "https://swapi.co/api/species/3/", "https://swapi.co/api/species/2/", "https://swapi.co/api/species/1/", "https://swapi.co/api/species/4/"],
    created: "2014-12-10T14:23:31.880000Z", edited: "2015-04-11T09:46:52.774897Z", url: "https://swapi.co/api/films/1/"
};

module.exports = Object.freeze({
    singleStarShipRespBody: singleStarShipRespBody,
    multiStarShipRespBody: multiStarShipRespBody,
    singlePersonRespBody: singlePersonRespBody,
    multiPersonRespBody: multiPersonRespBody,
    film1Url: film1Url,
    film1RespBody: film1RespBody,
    film2Url: film2Url,
    film2RespBody: film2RespBody,
    film3Url: film3Url,
    film3RespBody: film3RespBody,
    film4Url: film4Url,
    film4RespBody: film4RespBody
});


