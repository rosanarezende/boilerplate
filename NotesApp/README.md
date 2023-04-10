# Plataforma de Anotações

Esse projeto consiste em uma plataforma de anotações onde os usuários podem criar, visualizar, atualizar e excluir anotações.

Foram criadas 3 versões para fins educacionais dentro da pasta `/src`:

- `App.jsx`: plataforma totalmente implementada, mas com problemas de prop drilling.

- `AppWithContext.jsx`: o aluno deverá refatorar a versão anterior, corrigindo as prop drillings com o uso de context API.

- `AppWithRoutes.jsx`: o aluno deverá refatorar a versão anterior, implementando rotas.


## Exercícios

### AppWithContext

1. Crie um contexto para gerenciar o estado das anotações, como título, conteúdo e data de criação. O contexto deve permitir que as anotações sejam adicionadas, atualizadas e excluídas.

2. Crie um hook customizado para lidar com a lógica implementada no contexto.

3. Refatore o componente `App` a partir do arquivo `AppWithContext` para que ele utilize o contexto criado.

### AppWithRoutes

1. Crie rotas para cada uma das páginas da aplicação.

- `/`: página inicial, lista de anotações.
- `/create`: página para criar uma nova anotação.
- `/edit/:id`: página para editar uma anotação.
- `/details/:id`: página para visualizar os detalhes de uma anotação.
- página 404: página para quando o usuário acessar uma rota inexistente.

2. Crie um componente `Navbar` para conter os links para a página inicial e para a página de criação de anotações.

3. Crie um componente `NotFound` para conter a página 404.

4. Refatore o componente `App` a partir do arquivo `AppWithRoutes` para que ele utilize as rotas criadas.
