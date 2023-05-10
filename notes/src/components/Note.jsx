const Note = ({ note, toggleImportance, deleteNote }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <tr className="note">
      <td>{note.content}</td>
      <td>
        <button onClick={toggleImportance}>{label}</button>
      </td>
      <td>
        <button onClick={deleteNote}>delete</button>
      </td>
    </tr>
  )
}
export default Note