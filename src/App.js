import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contactos from './pages/Contactos'
import Ingresar from './pages/Ingresar'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'



const App = () => {
  return (
    <>
     
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
        <Route path='/ingresar' element={<Ingresar/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App