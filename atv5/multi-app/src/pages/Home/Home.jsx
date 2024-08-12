/* eslint-disable max-lines */
// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from 'react';
import {
  useNavigate,
} from 'react-router-dom';

import {
  FaBars,
  FaArrowLeft,
} from 'react-icons/fa';
import Login from '../Login/Login.jsx';
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AppContainer, Footer, MainContent,
  NavBarToggle, ReturnButton } from './HomeStyle';
import HomeCarousel from './HomeCarousel';
import HomeNav from './HomeNav';

function Home() {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual, e índice do carrossel.
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const navigate = useNavigate(); // Hook para navegação.

  // Efeito colateral que redireciona para a página de login se não estiver autenticado.
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Função para simular login e redirecionar para o gerador de QR code.
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/qrcode-generator');
  };

  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  // Alterna a visibilidade da barra de navegação.
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  // Função para retornar ao carrossel principal.
  const handleReturn = () => {
    setCurrentComponent(null);
  };

  // Renderiza o componente principal.
  return (
    <AppContainer>
      <NavBarToggle onClick={ toggleNavBar }>
        <FaBars size={ 24 } color="#2C3E50" />
      </NavBarToggle>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={ handleLogin } />
        </MainContent>
      ) : (
        <>
          <HomeNav isNavBarOpen={ isNavBarOpen } onLogout={ handleLogout } />
          <MainContent>
            {currentComponent ? (
              <ReturnButton onClick={ handleReturn }>
                <FaArrowLeft />
                {' '}
                Return
              </ReturnButton>
            ) : (
              <HomeCarousel />
            )}
            <Footer>© 2024 Your Company | All rights reserved</Footer>
          </MainContent>
        </>
      )}
    </AppContainer>
  );
}

export default Home;
