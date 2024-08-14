/* eslint-disable max-lines */
// Importa hooks e componentes do React e bibliotecas externas.
import { useEffect, useState } from 'react';
import {
  useNavigate,
} from 'react-router-dom';

import {
  FaBars,
  FaArrowLeft,
} from 'react-icons/fa';
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AppContainer, Footer, MainContent,
  NavBarToggle, ReturnButton } from './HomeStyle';
import HomeCarousel from './HomeCarousel';
import HomeNav from './HomeNav';

function Home({ children }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const navigate = useNavigate(); // Hook para navegação.
  const [currentComponent, setCurrentComponent] = useState(null);

  const path = window.location.pathname;
  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', '');
    navigate('/');
  };

  const toggleNavBar = () => { setIsNavBarOpen(!isNavBarOpen); };

  const handleReturn = () => {
    navigate('/home');
    setCurrentComponent(null);
  };

  useEffect(() => {
    if (path.split('/').length > 2) { setCurrentComponent(path.split('/')[2]); }
  }, [path]);

  return (
    <AppContainer>
      <NavBarToggle onClick={ toggleNavBar }>
        <FaBars size={ 24 } color="#2C3E50" />
      </NavBarToggle>

      <HomeNav isNavBarOpen={ isNavBarOpen } onLogout={ handleLogout } />
      <MainContent>
        {currentComponent ? (
          <>
            {children}
            <ReturnButton onClick={ handleReturn }>
              <FaArrowLeft />
              Return
            </ReturnButton>
          </>
        ) : (
          <HomeCarousel />
        )}
        <Footer>© 2024 Your Company | All rights reserved</Footer>
      </MainContent>

    </AppContainer>
  );
}

export default Home;
