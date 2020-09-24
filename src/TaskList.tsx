import React from 'react';
import {DogTask} from './DogTask';

interface Props {
    tasks: Task[];
    toggleTask: ToggleTask;
}

export const TaskList: React.FC<Props> = ({tasks, toggleTask}) => {
    return (
        <ul>
            {tasks.map(task => (
                <DogTask key={task.text} task={task} toggleTask={toggleTask} />
            ))}
        </ul>
    );
}