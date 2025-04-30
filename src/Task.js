import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons' 
import './Task.css';

function Task({task, onComplete, onDelete}){
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onComplete(task.id)}
            />
            <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.text}
            </span>
            <button className='deleteButton' onClick={() => onDelete(task.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
}

export default Task;