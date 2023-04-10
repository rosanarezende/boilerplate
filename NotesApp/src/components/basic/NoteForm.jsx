import { useState, useEffect } from "react";

export const NoteForm = ({ addNote, selectedNote, updateNote, setSelectedNote }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (selectedNote) {
      setFormValues({
        title: selectedNote.title,
        content: selectedNote.content,
      });
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedNote) {
      updateNote(selectedNote.id, {
        ...selectedNote,
        title: formValues.title,
        content: formValues.content,
      });
      setSelectedNote(null);
    } else {
      addNote({
        id: Date.now(),
        title: formValues.title,
        content: formValues.content,
      });
    }

    setFormValues({
      title: "",
      content: "",
    });
  };

  return (
    <div className="add-note">
      <h2>Adicionar Nova Nota</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
        />
        <textarea
          placeholder="Conteúdo"
          value={formValues.content}
          onChange={(e) =>
            setFormValues({ ...formValues, content: e.target.value })
          }
        />
        <button type="submit">
          {selectedNote ? "Atualizar Nota" : "Adicionar Nota"}
        </button>
      </form>
    </div>
  );
};
