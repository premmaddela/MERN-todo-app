const { gql } = require('graphql-tag');

const todoSchema = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type DeletedTodoResponse {
    id: ID!
  }

  type Query {
    getTodos: [Todo]
    getTodo(id: ID!): Todo
  }

  type Mutation {
    addTodo(title: String!): Todo
    updateTodo(id: ID!, title: String, completed: Boolean): Todo
    deleteTodo(id: ID!): DeletedTodoResponse
  }
`;

module.exports = todoSchema;