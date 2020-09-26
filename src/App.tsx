import React, { useEffect, useState } from 'react';
// import './App.css';
import { NoteForm } from './NoteForm';
import { NotesList } from './NotesList';
import { TaskList } from './TaskList';
import Axios from 'axios';
const api = 'http://localhost:8000/';

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

// export type DogTaskList = Task[]


const demoNote: Note[] = [
  {
    info: 'This is a test note'
  }
]

function App() {
  
  const [tasks, setTasks] = useState(dailyTasks);
  const [notes, setNotes] = useState(demoNote);
  
  // useEffect(() => {
  //   Axios.get<DogTaskList>(api + './dataPeek').then(response => {
  //     console.log('vastaus apista', response.data)
  //     setTasks(response.data)
  // })
  // })
  
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
  const addNote: AddNote = (info: string) => {
    const newNote = {info};
    setNotes([...notes, newNote])
  }

  return (
    <>
    <TaskList tasks={tasks} toggleTask={toggleTask}/>
    <NoteForm addNote={addNote}/>
    <NotesList notes={notes}/>
    </>
  );
}

export default App;
