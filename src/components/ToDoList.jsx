import React from 'react';
import ToDoItem from './Todoitem';

function ToDoList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((tasks) => (
        <ToDoItem
          key={tasks.id}
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
