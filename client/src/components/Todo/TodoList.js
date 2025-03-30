import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../graphql/queries';
import { useMutation } from '@apollo/client';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../../graphql/mutations';
import TodoItem from './TodoItem';
import Modal from '../Modal/Modal'; // Import the reusable modal component
import './TodoList.css'; // Import the CSS file for styling

const TodoList = () => {
  const { data, loading, error } = useQuery(GET_TODOS);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
  const [title, setTitle] = useState(''); // State for the todo title
  const [currentTodo, setCurrentTodo] = useState(null); // State for the todo being edited

  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      const existingTodos = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          getTodos: [...existingTodos.getTodos, addTodo],
        },
      });
    },
  });

  const [updateTodo] = useMutation(UPDATE_TODO);

  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache, { data: { deleteTodo } }) {
      // Read the current todos from the cache
      const existingTodos = cache.readQuery({ query: GET_TODOS });
  
      // Filter out the deleted todo
      const updatedTodos = existingTodos.getTodos.filter(
        (todo) => todo.id !== deleteTodo.id
      );
  
      // Write the updated todos back to the cache
      cache.writeQuery({
        query: GET_TODOS,
        data: { getTodos: updatedTodos },
      });
    },
  });

  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      await addTodo({
        variables: { title },
      });
      setTitle(''); // Clear the input field
      setIsModalOpen(false); // Close the modal
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  const handleEditTodo = async (e) => {
    e.preventDefault();
    try {
      await updateTodo({
        variables: { id: currentTodo.id, title },
      });
      setTitle(''); // Clear the input field
      setCurrentTodo(null); // Clear the current todo
      setIsModalOpen(false); // Close the modal
    } catch (err) {
      console.error('Error editing todo:', err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo({
        variables: { id },
      });
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const openAddModal = () => {
    setModalType('add');
    setTitle('');
    setIsModalOpen(true);
  };

  const openEditModal = (todo) => {
    setModalType('edit');
    setCurrentTodo(todo);
    setTitle(todo.title);
    setIsModalOpen(true);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error fetching todos</div>;

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">My Stylish Todo List</h2>
      <button
        className="add-todo-button"
        onClick={openAddModal} // Open the add modal
      >
        Add Todo
      </button>
      <div className="todo-list">
        {data.getTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={openEditModal}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>

      {/* Add/Edit Todo Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3>{modalType === 'add' ? 'Add Todo' : 'Edit Todo'}</h3>
          <form onSubmit={modalType === 'add' ? handleAddTodo : handleEditTodo}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={modalType === 'add' ? 'Enter todo title' : 'Edit todo title'}
              required
              className="modal-input"
            />
            <div className="modal-actions">
              <button type="submit" className="modal-button save">
                Save
              </button>
              <button
                type="button"
                className="modal-button cancel"
                onClick={() => setIsModalOpen(false)} // Close the modal
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default TodoList;