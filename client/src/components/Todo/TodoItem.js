import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="todo-title">{todo.title}</div>
      <div className="todo-actions">
        <button
          onClick={() => onEdit(todo)}
          className="todo-button edit"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="todo-button delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;