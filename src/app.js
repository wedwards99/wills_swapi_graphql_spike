const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/querys');
// const graphql = require('graphql').graphql;

const PORT = 4000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('listening use: http://localhost:' + PORT + '/graphql');
    // graphql(schema, '{ship(id: 9) {id name manufacturer films {title release_date}}}', global).then((response) => {
    // graphql(schema, '{ship_list {id name manufacturer films {title release_date}}}', global).then((response) => {
    //     console.log('response=', JSON.stringify(response));
    //     console.log('data=', JSON.stringify(response.data));
    //     console.log('errors=', JSON.stringify(response.errors));
    // });
});
