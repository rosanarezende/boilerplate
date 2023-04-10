import { useState } from "react";
import { NoteForm, NoteList, NoteDetails } from "./components/basic";

export const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  return (
    <div>
      <h1>Plataforma de Anotações</h1>
      <NoteForm
        addNote={addNote}
        selectedNote={selectedNote}
        updateNote={updateNote}
        setSelectedNote={setSelectedNote}
      />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        handleNoteSelect={handleNoteSelect}
        setSelectedNote={setSelectedNote}
      />
      <NoteDetails note={selectedNote} />
    </div>
  );
};

export default App;
