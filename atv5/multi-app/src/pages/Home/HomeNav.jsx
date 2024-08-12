import React from 'react';
import { FaGlobeAmericas, FaNetworkWired,
  FaQrcode, FaRegQuestionCircle, FaSearch, FaTasks } from 'react-icons/fa';
import { NavBar, StyledLink } from './HomeStyle';

export default function HomeNav({ isNavBarOpen, handleLogout }) {
  return (
    <NavBar isOpen={ isNavBarOpen }>
      <StyledLink to="QRCodeGenerator">
        <FaQrcode />
        QR Code Generator
      </StyledLink>
      <StyledLink to="IPAddressFinder">
        <FaNetworkWired />
        IP Address Finder
      </StyledLink>
      <StyledLink to="MovieSearchEngine">
        <FaSearch />
        Movie Search
      </StyledLink>
      <StyledLink to="TodoApp">
        <FaTasks />
        Todo App
      </StyledLink>
      <StyledLink to="QuizApp">
        <FaRegQuestionCircle />
        Quiz App
      </StyledLink>
      <StyledLink to="LanguageTranslator">
        <FaGlobeAmericas />
        Translator
      </StyledLink>
      <button
        onClick={ handleLogout }
        style={ {
          marginTop: '20px',
          color: 'white',
          backgroundColor: 'transparent',
          border: 'none',
        } }
      >
        Logout
      </button>
    </NavBar>
  );
}
