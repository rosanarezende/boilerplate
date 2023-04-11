export function ContextAPI() {
  // Não teremos mais os dados do usuário aqui, mas sim no contexto
  // const user = { name: "Maria", email: "maria@email.com" };

  return (
    <section>
      <h2>Context API</h2>
      <p>
        Permite criar um contexto compartilhado que pode ser acessado por
        componentes em diferentes níveis da árvore de componentes, sem precisar
        passar props manualmente por cada nível intermediário
      </p>

      {/* Para usar o contexto o componente precisa ser "abraçado por um provider" */}

      {/* Como o tema é usado em toda a aplicação (header e também main) abraçamos (ThemeProvider) a aplicação inteira (no main.js) e não aqui */}
    </section>
  );
}
