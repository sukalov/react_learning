const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <>
    <li>
      {note.content}   
    </li>
    <li>
    <button onClick={toggleImportance}>{label}</button>
    </li>
    </>
  )
}
export default Note