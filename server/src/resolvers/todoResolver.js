const Todo = require('../models/Todo');

const resolvers = {
  Query: {
    getTodos: async () => {
      try {
        return await Todo.find(); // Fetch all todos
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw new Error('Failed to fetch todos');
      }
    },
    getTodo: async (_, { id }) => {
      try {
        const todo = await Todo.findById(id); // Fetch a single Todo by ID
        if (!todo) {
          throw new Error('Todo not found');
        }
        return todo;
      } catch (error) {
        console.error('Error fetching todo:', error);
        throw new Error('Failed to fetch todo');
      }
    },
  },
  Mutation: {
    addTodo: async (_, { title }) => {
      try {
        const newTodo = new Todo({ title, completed: false });
        return await newTodo.save(); // Save the new todo to the database
      } catch (error) {
        console.error('Error adding todo:', error);
        throw new Error('Failed to add todo');
      }
    },
    updateTodo: async (_, { id, title, completed }) => {
      try {
        const updatedFields = {};
        if (title !== undefined) updatedFields.title = title;
        if (completed !== undefined) updatedFields.completed = completed;

        const updatedTodo = await Todo.findByIdAndUpdate(
          id,
          updatedFields,
          { new: true } // Return the updated document
        );

        if (!updatedTodo) {
          throw new Error('Todo not found');
        }

        return updatedTodo;
      } catch (error) {
        console.error('Error updating todo:', error);
        throw new Error('Failed to update todo');
      }
    },
    deleteTodo: async (_, { id }) => {
      const deletedTodo = await Todo.findByIdAndDelete(id);
      if (!deletedTodo) {
        throw new Error('Todo not found');
      }
      return { id: deletedTodo.id }; // Return the deleted todo's ID
    },
  },
};

module.exports = resolvers;