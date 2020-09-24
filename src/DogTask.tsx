import React from 'react';

interface Props {
    task: Task;
    toggleTask: ToggleTask;
}

export const DogTask: React.FC<Props> = ({ task, toggleTask }) => {
    return (
    <li>
        <label 
        style= {{ textDecoration: task.complete ? 'line-through' : undefined}}
        >
            <input 
            type='checkbox' 
            checked={task.complete} 
            onClick={() => {toggleTask(task)}}/> {task.text}
        </label>
    </li>
    )
}