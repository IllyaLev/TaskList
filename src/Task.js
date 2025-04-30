import React from 'react';

function Task({task, onComplete}){
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
        </li>
    );
}

export default Task;