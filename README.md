# Todo List Application

This is a full-stack Todo List application built with React, Node.js, Express, and GraphQL. The application allows users to create, update, and delete todo items. It utilizes functional components, hooks, Redux, and the Context API for state management.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client is a React application located in the `client` directory. It includes:

- **public/**: Contains static files such as `index.html` and `favicon.ico`.
- **src/**: Contains the source code for the React application.
  - **components/**: Contains functional components for adding, editing, and displaying todos.
  - **context/**: Contains the TodoContext for managing state using the Context API.
  - **redux/**: Contains Redux-related files including actions, reducers, and store configuration.
  - **graphql/**: Contains GraphQL queries and mutations for interacting with the server.
  - **App.js**: The main component that sets up the application.
  - **index.js**: The entry point for the React application.

### Server

The server is built with Node.js and Express, located in the `server` directory. It includes:

- **src/**: Contains the source code for the server application.
  - **models/**: Contains the Mongoose model for todo items.
  - **resolvers/**: Contains resolver functions for GraphQL queries and mutations.
  - **schema/**: Contains the GraphQL schema definition for todos.
  - **routes/**: Contains the main routing setup for the Express server.
  - **app.js**: Sets up the Express application, including middleware and routes.
  - **server.js**: The entry point for the server, starting the Express application.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Features

- Add new todo items
- Edit existing todo items
- Delete todo items
- View all todo items

## Contributing

Feel free to submit issues or pull requests to improve the application. 

## License

This project is licensed under the MIT License.