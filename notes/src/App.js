import React from 'react';
import { useState, useEffect } from 'react';
import noteService from './services/notes.js'

import Notification from './components/Notification.jsx'
import Note from './components/Note.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    noteService.getAll()
      .then(allNotes => {
        console.log(allNotes)
        setNotes(allNotes.concat({id: allNotes.length + 1, content: 'BULLLSH', important: true}))
      })
  }, [])

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
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
    })
  }

  const deleteNote = (note) => {
    noteService.del(note.id)
    console.log(note)
  }

  const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16,
      bottom: 0
    }
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
      </div>
    )
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <table><tbody>
        {notesToShow.map((note, i) => 
        <Note key={note.id} note={note} deleteNote={() => deleteNote(note)}toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </tbody></table>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={(e) => setNewNote(e.target.value)}/>&nbsp;&nbsp;
        <button type="submit">save</button>
      </form> <br />
      <button onClick={myFilter}>show {showAll ? 'important' : 'all' }</button>
      <Footer />
    </div>
  )
}

export default App