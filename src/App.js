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

  const handleDelete = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete))
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
      <button onClick={handleAddTask} className='addTask'>
        Add New Task
      </button>
      <div className='filterContainer'>
        <button>
          All
        </button>
        <button>
          Completed
        </button>
        <button>
          Incompleted
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
