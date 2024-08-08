import styled from 'styled-components';
// Cria um componente estilizado chamado Question usando styled-components.
// Esse componente estiliza um <p> para exibir a pergunta com cor, tamanho da fonte e margem.
export const Question = styled.p`
  color: #555; // Define a cor do texto como um tom médio de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo da pergunta.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado OptionButton usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas, e efeitos de transição.
export const OptionButton = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  margin: 10px; // Adiciona uma margem de 10px ao redor do botão.
  transition: background-color 0.3s, transform 0.3s; 

  &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: #0056b3; // Muda a cor de fundo para um tom mais escuro de azul.
    transform: scale(1.05); // Aumenta levemente o tamanho do botão.
  }

  &:active { // Aplica estilos ao botão quando ele é clicado.
    background-color: #004494; 
    transform: scale(0.95); // Reduz levemente o tamanho do botão.
  }
`;

export const Score = styled.p`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-top: 20px; // Adiciona uma margem de 20px acima da pontuação.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;
