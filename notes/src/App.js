import React from 'react';
import { useState, useEffect } from 'react';
import Note from './components/Note.jsx';
import noteService from './services/notes.js'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService.getAll()
      .then(allNotes => {
        setNotes(allNotes)
      })
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService.create(noteObject)
    .then(addedNote => {
      setNotes(notes.concat(addedNote))
      setNewNote('')
    })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const myFilter = () => {
    setShowAll(prev => !prev)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService.update(id, changedNote)
      .then(updatedNote => {
        setNotes(notes.map(n => n.id !== id ? n : updatedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note, i) => 
        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
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