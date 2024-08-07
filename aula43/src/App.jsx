import './App.css'
import { Route, Routes } from 'react-router-dom'
import IPAddressFinder from './components/IPAddressFinder'
import LanguageTranslator from './components/LanguageTranslator'
import MovieSearchEngine from './components/MovieSearchEngine'
import QRCodeGenerator from './components/QRCodeGenerator'
import Layout from './Layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Layout /> } >  
        <Route path='ip' element={ <IPAddressFinder /> } />
        <Route path='language' element={ <LanguageTranslator /> } />
        <Route path='movie' element={ <MovieSearchEngine /> } />
        <Route path='qrcode' element={ <QRCodeGenerator /> } />
      </Route>
      {/* <Route path="*" element={ <NotFound /> } /> */}
    </Routes>
  )
}

export default App
