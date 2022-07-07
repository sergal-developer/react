import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elije una de estas opciones</p>

        <ul>
            <li> <NavLink className={ ({ isActive }) => isActive ? "activado" : "" } to="/panel/panelMain" > panel </NavLink> </li>
            <li> <NavLink className={ ({ isActive }) => isActive ? "activado" : "" } to="/panel/crearArticulos" > crear Articulos </NavLink> </li>
            <li> <NavLink className={ ({ isActive }) => isActive ? "activado" : "" } to="/panel/gestionUsuarios" > gestion Usuarios </NavLink>  </li>
            <li> <NavLink className={ ({ isActive }) => isActive ? "activado" : "" } to="/panel/acerca" > acerca de </NavLink>  </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
