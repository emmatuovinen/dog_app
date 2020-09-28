import React, { useEffect, useState } from 'react';
// import './App.css';
import { NoteForm } from './NoteForm';
import { NotesList } from './NotesList';
import { TaskList } from './TaskList';
import {GetBasicTasks, GetNotesFromApi} from './dogApi';

// let dailyTasks: Task[] = [
//   {
//       text: 'Morning walk',
//       complete: false,
//   },
//   {
//       text: 'Give dog breakfast',
//       complete: true,
//   },
// ];

let dailyTasks: Task[] = []

let dailyNotes: Note[] = []

// const demoNote: Note[] = [
//   {
//     info: 'This is a test note'
//   }
// ]

function App() {
  
  const [isLoading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(dailyTasks);
  const [notes, setNotes] = useState(dailyNotes);

  useEffect(() => {
    GetBasicTasks().then(data => {
    dailyTasks = data
    setTasks(dailyTasks)
  })
  GetNotesFromApi().then(noteData => {
    dailyNotes = noteData
    console.log('dn', dailyNotes)
    setNotes(dailyNotes)
    })
  setLoading(false)
  }, [])

  // useEffect(() => {
  //   GetNotesFromApi().then(noteData => {
  //   dailyNotes = noteData
  //   console.log('dn', dailyNotes)
  //   setNotes(dailyNotes)
  //   })
  // }, [])


if(isLoading) {
  return <div> Loading </div>
}
  
 
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
