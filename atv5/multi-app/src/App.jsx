import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import QRCodeGenarator from './pages/QRCode/QRCodeGenarator.jsx';
import IPAddressFinder from './pages/IpFinder/IPAddressFinder.jsx';
import MovieSearchEngine from './pages/MovieSearch/MovieSearchEngine.jsx';
import TodoApp from './pages/TodoList/TodoApp.jsx';
import QuizApp from './pages/Quiz/QuizApp.jsx';
import LanguageTranslator from './pages/Translator/LanguageTranslator.jsx';
import PrivateRoute from './PrivateRoute.jsx';

export default function App() {
  return (
    <Routes>

      <Route path="/login" element={ <Login /> } />

      <Route path="/home" element={ <PrivateRoute /> }>
        <Route path="QRCodeGenerator" element={ <QRCodeGenarator /> } />
        <Route path="IPAddressFinder" element={ <IPAddressFinder /> } />
        <Route path="MovieSearchEngine" element={ <MovieSearchEngine /> } />
        <Route path="TodoApp" element={ <TodoApp /> } />
        <Route path="QuizApp" element={ <QuizApp /> } />
        <Route path="LanguageTranslator" element={ <LanguageTranslator /> } />
      </Route>

      <Route path="*" element={ <Login /> } />

    </Routes>
  );
}
