import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Article } from '../views/Article';
import { Contact } from '../views/Contact';
import { Home } from '../views/Home';
import { Page404 } from '../views/Page404';
import { Persona } from '../views/Persona';

export const RouterMain = () => {
  return (
    <>
    <BrowserRouter>

      <ul>
        <li> <NavLink className={ ({ isActive }) => isActive ? "activado" : "" } to="/inicio" > Inicio </NavLink> </li>
        <li> <NavLink className={ ({ isActive }) => isActive ? "activado" : "" } to="/articulo" > Articulos </NavLink> </li>
        <li> <NavLink className={ ({ isActive }) => isActive ? "activado" : "" } to="/contacto" > Contacto </NavLink>  </li>
      </ul>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/inicio" element={ <Home /> } />
            <Route path="/articulo" element={ <Article /> } />
            <Route path="/contacto" element={ <Contact /> } />
            <Route path="/persona" element={ <Persona /> } />
            <Route path="/persona/:nombre/" element={ <Persona /> } />
            <Route path="/persona/:nombre/:apellido" element={ <Persona /> } />
            <Route path="*" element={ <Page404 /> } />
        </Routes>
    </BrowserRouter>
    </>
  )
}
