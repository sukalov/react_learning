import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
        console.log(response)
      })
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const myFilter = () => {
    setShowAll(prev => !prev)
    console.log(JSON.stringify(notes))
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
        <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={(e) => setNewNote(e.target.value)}/>&nbsp;&nbsp;
        <button type="submit">save</button>
      </form> <br /> 
      <button onClick={myFilter}>show {showAll ? 'important' : 'all' }</button>
    </div>
  )
}

export default App