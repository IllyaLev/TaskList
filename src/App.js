import React, {useState} from 'react';
import Task from './Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, completed: !task.completed} : task
      )
    )
  }

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleAddTask = () => {
    if(newTask.trim() !== ''){
      setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}])
      setNewTask('');
    }
  }

  return (
    <div className='App'>
      <h1>Task List</h1>
      <input 
        type='text'
        value={newTask}
        onChange={handleInputChange}
        placeholder='Add new task'
      />
      <button onClick={handleAddTask}>
        Add New Task
      </button>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onComplete={handleComplete}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
