import React from 'react';

function ToDoItem({ tasks, toggleComplete, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: tasks.isCompleted ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => toggleComplete(tasks.id)}
      >
        {tasks.text}
      </span>
      <button onClick={() => deleteTask(tasks.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
