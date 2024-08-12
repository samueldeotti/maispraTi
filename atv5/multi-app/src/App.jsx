import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Layout from './Layout.jsx';
import Home from './pages/Home/Home.jsx';
import QRCodeGenarator from './pages/QRCode/QRCodeGenarator.jsx';
import IPAddressFinder from './pages/IpFinder/IPAddressFinder.jsx';
import MovieSearchEngine from './pages/MovieSearch/MovieSearchEngine.jsx';
import TodoApp from './pages/TodoList/TodoApp.jsx';
import QuizApp from './pages/Quiz/QuizApp.jsx';
import LanguageTranslator from './pages/Translator/LanguageTranslator.jsx';

export default function App() {
  return (
    <Routes>

      <Route path="/" element={ <Login /> } />

      <Route path="/home" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/home/QRCodeGenerator" element={ <QRCodeGenarator /> } />
        <Route path="/home/IPAddressFinder" element={ <IPAddressFinder /> } />
        <Route path="/home/MovieSearchEngine" element={ <MovieSearchEngine /> } />
        <Route path="/home/TodoApp" element={ <TodoApp /> } />
        <Route path="/home/QuizApp" element={ <QuizApp /> } />
        <Route path="/home/LanguageTranslator" element={ <LanguageTranslator /> } />
      </Route>

    </Routes>
  );
}
