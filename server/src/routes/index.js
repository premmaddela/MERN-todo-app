// filepath: /Users/prem/CODE/todo-app/server/src/routes/index.js
const { graphqlHTTP } = require('express-graphql');
const todoSchema = require('../schema/todoSchema');

const router = require('express').Router();

router.use(
  '/graphql',
  graphqlHTTP({
    schema: todoSchema,
    graphiql: true, // Enables the GraphiQL interface for testing
  })
);

module.exports = router;