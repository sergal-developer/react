import React, { useContext } from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';
import { Login } from '../components/Login';
import { PruebaContext } from '../contexts/PruebaContext';

export const AppRouter = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);
  console.log('usuario: ', usuario);

  const logout = e =>  {
    setUsuario({});
  }

  return (
    <>
      <BrowserRouter>

      <header className='header'>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/acerca-de">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            {
                usuario && usuario.username ? (
                  <>
                   <li>
                      <NavLink to="/">@{ usuario.username }</NavLink>
                   </li>
                   <li>
                    <a onClick={ logout }>Cerrar Session</a>
                  </li>
                  </>
                ) : (
                  <li>
                    <NavLink to="/login">Identificate</NavLink>
                  </li>
                )
              }
          </ul>
        </nav>
        </header>
        <section>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/acerca-de' element={<Acerca />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<Error />} />
        </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}
