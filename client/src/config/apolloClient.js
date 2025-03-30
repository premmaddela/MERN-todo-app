import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:5001/graphql',
  cache: new InMemoryCache(),
});

export default client;