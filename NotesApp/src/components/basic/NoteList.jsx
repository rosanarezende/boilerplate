import { NoteItem } from "./NoteItem";

// Prop drilling: recebendo a propriedade deleteNote, mas não a está usando
export const NoteList = ({ notes, deleteNote, handleNoteSelect, setSelectedNote }) => {
  return (
    <div>
      <h2>Lista de Anotações</h2>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            handleNoteSelect={handleNoteSelect}
            setSelectedNote={setSelectedNote}
          />
        ))}
      </div>
    </div>
  );
};
