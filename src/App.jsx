import  { useState } from 'react';
import ToDoInput from './components/Todoinput';
import ToDoList from './components/Todolist';


function App() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, isCompleted: false }]);
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        tasks.id === id ? { ...tasks, isCompleted: !tasks.isCompleted } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(tasks => tasks.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
