# Todo App Server

This is the server-side of the Todo application built with **Node.js**, **Express**, and **GraphQL**. It provides a GraphQL API for managing todo items and uses **Mongoose** for MongoDB object modeling.

## Features

- **CRUD Operations**: Create, read, update, and delete todo items.
- **GraphQL API**: Efficient data fetching with GraphQL.
- **MongoDB Integration**: Uses Mongoose for seamless database interaction.
- **Error Handling**: Robust error handling for API requests.

## Getting Started

Follow these steps to set up and run the server locally.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **MongoDB** (local or cloud instance)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the server directory:
   cd todo-app/server

3. Install the dependencies:
   npm install

###  Configuration
   1. Set up MongoDB:

      Open the src/app.js file.
      Update the MongoDB connection string with your database credentials.
      Example:

      mongoose.connect('mongodb://localhost:27017/todo-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      });
         
   2. Environment Variables:
      You can use a .env file to manage sensitive configuration like the MongoDB URI.
      Example .env file:
      MONGO_URI=mongodb://localhost:27017/todo-app
      PORT=5001

### Running the Server
   1. Start the server:
      npm start

      The server will run on http://localhost:5001 by default.

      GraphQL API
      The server exposes a GraphQL API. You can use tools like Postman, GraphQL Playground, or Apollo Studio to interact with the API.

      Example Queries
      Fetch All Todos:
      query {
      todos {
      id
      title
      completed
      }
      }

      Add a Todo:

      mutation {
      addTodo(title: "New Todo") {
      id
      title
      completed
      }
      }

      Update a Todo:
      mutation {
      updateTodo(id: "todo-id", title: "Updated Todo", completed: true) {
      id
      title
      completed
      }
      }

      Delete a Todo:
      mutation {
      deleteTodo(id: "todo-id") {
      id
      title
      completed
      }
      }

      Project Structure
      todo-app/server
      ├── src
      │   ├── resolvers        # GraphQL resolvers
      │   ├── schema           # GraphQL schema definitions
      │   ├── models           # Mongoose models
      │   ├── app.js           # Main application file
      │   └── server.js        # Server entry point
      ├── package.json         # Project dependencies and scripts
      └── [README.md]   

## Technologies Used
      Node.js: JavaScript runtime for building the server.
      Express: Web framework for Node.js.
      GraphQL: API query language for efficient data fetching.
      Mongoose: MongoDB object modeling for Node.js.
      Apollo Server: GraphQL server implementation.
      License
      This project is licensed under the MIT License. See the LICENSE file for details.