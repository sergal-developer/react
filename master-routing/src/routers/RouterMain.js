import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Acerca } from '../components/panel/Acerca';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { PanelMain } from '../components/panel/PanelMain';
import { PanelControl } from '../components/PanelControl';
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
          <li> <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/inicio" > Inicio </NavLink> </li>
          <li> <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/articulo" > Articulos </NavLink> </li>
          <li> <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/contacto" > Contacto </NavLink>  </li>
          <li> <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/persona" > persona </NavLink>  </li>
          <li> <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/panel" > panel de control </NavLink>  </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/articulo" element={<Article />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/persona/:nombre/" element={<Persona />} />
          <Route path="/persona/:nombre/:apellido" element={<Persona />} />
          <Route path="/redirigir" element={<Navigate to="/persona/moises/alvarado" />} />
          <Route path='/panel/*' element={<PanelControl />}>
          <Route path="panelMain" element={<PanelMain />} />
            <Route index element={<PanelMain />} />
            <Route path="panelMain" element={<PanelMain />} />
            <Route path="crearArticulos" element={<Crear />} />
            <Route path="gestionUsuarios" element={<Gestion />} />
            <Route path="acerca" element={<Acerca />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
