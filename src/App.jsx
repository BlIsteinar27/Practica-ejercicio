
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Continentes from './pages/Continentes'
import Contactos from './pages/Contactos'
import Nosotros from './pages/Nosotros'
import Detalle from './pages/Detalle'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="*" element={<Inicio/>} />
            <Route path="/" element={<Inicio/>} />
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="/contactos" element={<Contactos/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/continentes/region/:region" element={<Continentes/>} />
            <Route path="/detalle/name/:name" element={<Detalle/>} />


          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
