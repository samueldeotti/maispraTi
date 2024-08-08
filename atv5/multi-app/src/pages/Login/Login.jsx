import { useState } from 'react'; // Importa o hook useState do React
import { LoginButton, LoginContainer, LoginForm, LoginInput } from './Login';

// Componente principal de Login
// eslint-disable-next-line react/prop-types
function Login({ onLogin }) {
  const [username, setUsername] = useState(''); // Define o estado para o nome de usuário
  const [password, setPassword] = useState(''); // Define o estado para a senha

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (username === 'admin' && password === 'password') {
      onLogin(); // Chama a função onLogin passada como prop se as credenciais estiverem corretas
    } else {
      alert('Invalid credentials'); // Exibe um alerta se as credenciais estiverem incorretas
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={ handleSubmit }>
        <h2>Login</h2>
        <LoginInput
          type="text"
          value={ username } // Valor do campo de entrada é ligado ao estado username
          onChange={ (e) => setUsername(e.target.value) } // Atualiza o estado username conforme o usuário digita
          placeholder="Username" // Placeholder do campo de entrada
        />
        <LoginInput
          type="password"
          value={ password } // Valor do campo de entrada é ligado ao estado password
          onChange={ (e) => setPassword(e.target.value) } // Atualiza o estado password conforme o usuário digita
          placeholder="Password" // Placeholder do campo de entrada
        />
        <LoginButton type="submit">Login</LoginButton>
        {' '}
        {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  );
}

export default Login; // Exporta o componente Login como padrão
