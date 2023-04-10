export const NoteDetails = ({ note }) => {
  return (
    <div>
      <h2>Detalhes da Nota</h2>
      {note ? (
        <>
          <p>Título: {note.title}</p>
          <p>Conteúdo: {note.content}</p>
        </>
      ) : (
        <p>Selecione uma nota para visualizar os detalhes.</p>
      )}
    </div>
  );
};

