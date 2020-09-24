import React, { useState } from 'react';
import { toEditorSettings } from 'typescript';
// import './App.css';
import { DogTask } from './DogTask';
import { NoteForm } from './NoteForm';
import { TaskList } from './TaskList';

const dailyTasks: Task[] = [
  {
      text: 'Morning walk',
      complete: false,
  },
  {
      text: 'Give dog breakfast',
      complete: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(dailyTasks);
  const [notes, setNotes] = useState('');
  
  // this is the toggleTask function to mark a task complete
  const toggleTask: ToggleTask = (selectedTask: Task) => {
    const newTasks = tasks.map(task => {
      if (task === selectedTask) {
      return {
        ...task, 
        complete: !task.complete
      }
    }
      return task;
    })
    setTasks(newTasks)
  }

  //this is the AddNote function 
  const addNote: AddNote = (text: string) => {
    const newNote = {text, complete: false};
    setTasks([...tasks, newNote])
  }

  return (
    <>
    <TaskList tasks={tasks} toggleTask={toggleTask}/>
    <NoteForm />
    </>
  );
}

export default App;
