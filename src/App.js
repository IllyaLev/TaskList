import React, {useState} from 'react';
import Task from './Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  const [filter, setFilter] = useState('all');

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

  const filteredTasks = tasks.filter((task) => {
    if(filter === 'completed') return task.completed;
    if(filter === 'incompleted') return !task.completed;
    return true
  });

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
        <button className='filterButton' onClick={() => setFilter('all')}>
          All
        </button>
        <button className='filterButton' onClick={() => setFilter('completed')}>
          Completed
        </button>
        <button className='filterButton' onClick={() => setFilter('incompleted')}>
          Incompleted
        </button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
