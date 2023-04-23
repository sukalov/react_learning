import { useState, useRef } from 'react'
import Note from './components/Note.jsx'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  // const [newNote, setNewNote] = useState('');
  const inputRef = useRef()
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: inputRef.current.value,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    inputRef.current.value = '';
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
        <input ref={inputRef}/>&nbsp;&nbsp;
        <button type="submit">save</button>
      </form> <br /> 
      <button onClick={myFilter}>show {showAll ? 'important' : 'all' }</button>
    </div>
  )
}

export default App