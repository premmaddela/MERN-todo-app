# Todo App Client

This is the client-side of the Todo application built with React, Node, Express, and GraphQL. The application allows users to create, update, and delete todo items.

## Features

- Add new todo items
- Edit existing todo items
- Delete todo items
- View a list of all todos

## Technologies Used

- React
- Redux for state management
- Context API for managing todo state
- GraphQL for API interactions
- Node.js and Express for the backend

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory:

   ```
   cd todo-app/client
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To start the client application, run:

```
npm start
```

This will start the development server and open the application in your default web browser.

### Folder Structure

- `public/`: Contains static files like `index.html` and `favicon.ico`.
- `src/`: Contains the source code for the React application.
  - `components/`: Contains functional components for adding, editing, and displaying todos.
  - `context/`: Contains the TodoContext for managing state using the Context API.
  - `redux/`: Contains Redux actions, reducers, and store configuration.
  - `graphql/`: Contains GraphQL queries and mutations for interacting with the server.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.