import styled from 'styled-components';

// Cria um componente estilizado chamado TaskList usando styled-components.
// Esse componente estiliza uma <ul> para listar as tarefas sem estilo de lista padrão.
export const TaskList = styled.ul`
  list-style-type: none; // Remove os pontos de lista padrão.
  padding: 0; // Remove o padding padrão.
  width: 100%; // Define a largura como 100% do contêiner pai.
`;

// Cria um componente estilizado chamado TaskItem usando styled-components.
// Esse componente estiliza um <li> com fundo, bordas arredondadas, padding, margem, sombra e efeitos de transição.
export const TaskItem = styled.li`
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  padding: 10px; // Adiciona padding de 10px dentro do item.
  margin-bottom: 10px; // Adiciona uma margem de 10px abaixo do item.
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do item.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  display: flex; // Define o layout como flexbox.
  justify-content: space-between; // Distribui o espaço entre os itens do item.
  align-items: center; // Alinha os itens no centro verticalmente.

  &:hover { // Aplica estilos ao item quando o cursor está sobre ele.
    background-color: #f1f1f1; 
  }

  button { // Estiliza os botões dentro do TaskItem.
    margin-left: 10px; // Adiciona uma margem de 10px à esquerda do botão.
    background: transparent; // Define o fundo como transparente.
    border: none; // Remove a borda padrão do botão.
    color: red; // Define a cor do texto como vermelho.
    cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
    font-size: 16px; // Define o tamanho da fonte como 16px.

    &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
      color: darkred; // Muda a cor do texto para um tom mais escuro de vermelho.
    }
  }
`;

// Cria um componente estilizado chamado EditInput usando styled-components.
// Esse componente estiliza um <input> para edição de tarefas com padding, borda, bordas arredondadas e sombra interna.
export const TodoEditInput = styled.input`
  margin-left: 10px; // Adiciona uma margem de 10px à esquerda do input.
  padding: 6px; // Adiciona padding de 6px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 60%; // Define a largura como 60% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 14px; // Define o tamanho da fonte como 14px.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus { // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;
