## Introduction

This is a simple NodeJS project written on JetBrains Webstorm to spike out GraphQL with [https://swapi.co/](https://swapi.co/) data with the applicable many-to-many relationships. I also made it to use [Sinon](https://github.com/sinonjs/sinon) for mocking promise wrapped [request](https://github.com/request/request) responses in the test modules.

The server is started by running &#39;app&#39; and it&#39;ll start on port 4000 by default.  Connecting a browser to [http://localhost:4000/graphql](http://localhost:4000/graphql) will show the Graph_i_QL interface, some sample queries are:

Show the films the Millennium Falcon was in:

```javascript
{
  ship(id: 10) {
    id
    name
    films {
      title
      release_date
    }
  }
}
```
Show a list of the films and their characters:
```javascript
{
  film_list {
    title
    release_date
    people {
      name
    }
  }
}
```

#### Todo

- Lists have pagination in swapi, this needs to be added so the list variants display everything.
- Test coverage is not 100%, that needs to be improved.
- Not all many-to-many relationships are modeled, all types (starships, people, planest, species and vehicles) have edges to the films they appear in, and films have the edges to the people that appeared in them, but others need to added, e.g. the planet a person was from, vehicles that appeared in a film, etc.
- Right now everything is pushed, all the node modules, etc. that's a bit clumsy and needs to be straightened out.  