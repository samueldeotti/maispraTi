import styled from 'styled-components'; // Importa styled-components para estilizar os componentes

// Define o estilo do container principal do login
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Define o estilo do formulário de login
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Define o estilo do campo de entrada
export const LoginInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

// Define o estilo do botão
export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
