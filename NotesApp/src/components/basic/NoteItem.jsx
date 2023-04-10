export const NoteItem = ({ note, deleteNote, handleNoteSelect, setSelectedNote }) => {

  const handleDelete = () => {
    deleteNote(note.id);
    setSelectedNote(null);
  };

  return (
    <div className='note-item'>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={() => handleNoteSelect(note)}>Selecionar</button>
    </div>
  );
};
