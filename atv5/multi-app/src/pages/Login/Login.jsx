import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, LoginForm, LoginInput } from './Login';
import { Button, Title } from '../UtilsStyle';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={ handleSubmit }>
        <Title>Login</Title>
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
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
