import React from 'react';
import { FaGlobeAmericas, FaNetworkWired,
  FaQrcode, FaRegQuestionCircle, FaSearch, FaTasks } from 'react-icons/fa';
import { NavBar, StyledLink } from './HomeStyle';

export default function HomeNav({ isNavBarOpen, handleLogout }) {
  return (
    <NavBar isOpen={ isNavBarOpen }>
      <StyledLink to="/home/QRCodeGenerator">
        <FaQrcode />
        QR Code Generator
      </StyledLink>
      <StyledLink to="/home/IPAddressFinder">
        <FaNetworkWired />
        IP Address Finder
      </StyledLink>
      <StyledLink to="/home/MovieSearchEngine">
        <FaSearch />
        Movie Search
      </StyledLink>
      <StyledLink to="/home/TodoApp">
        <FaTasks />
        Todo App
      </StyledLink>
      <StyledLink to="/home/QuizApp">
        <FaRegQuestionCircle />
        Quiz App
      </StyledLink>
      <StyledLink to="/home/LanguageTranslator">
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
