import { gql } from '@apollo/client';

// Query to fetch all todos
export const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      completed
    }
  }
`;

// Query to fetch a single todo by ID
export const GET_TODO = gql`
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      title
      completed
    }
  }
`;