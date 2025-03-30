const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/todoSchema');
const resolvers = require('./resolvers/todoResolver');

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS
app.use(cors());

// Apollo Server setup
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  // MongoDB connection
  mongoose
    .connect('mongodb://localhost:27017/todo-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB connected');
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
      });
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
}

startApolloServer();