import { useState } from 'react';
import { LoginButton, LoginContainer, LoginForm, LoginInput } from './Login';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={ handleSubmit }>
        <h2>Login</h2>
        <LoginInput
          type="text"
          value={ username }
          onChange={ (e) => setUsername(e.target.value) }
          placeholder="Username"
        />
        <LoginInput
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Password"
        />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
