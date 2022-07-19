import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../components/ErrorPage';
import { Footer } from '../components/Footer';
import { Home } from '../components/Home';
import { Navbar } from '../components/Navbar';
import { Portfolio } from '../components/Portfolio';
import { PortfolioDetails } from '../components/PortfolioDetails';

export const RouterApp = ({ data }) => {

  const menus = [
    { id: 1, path: '/inicio', name: 'Home', element: <Home /> },
    { id: 2, path: '/acerca', name: 'Acerca', element: <Home /> },
    { id: 3, path: '/portafolio', name: 'Portafolio', element: <Portfolio expertises={data.expertises} projects={data.projects} /> },
    { id: 4, path: '/blog', name: 'Blog', element: <Home /> },
    { id: 5, path: '/contacto', name: 'Contacto', element: <Home /> },
  ];

  return (
    <BrowserRouter>
      {/* HEADER NAVEGACION */}
      <Navbar menus={menus} />

      {/* CONTENIDO */}
      <Routes>
        <Route path="/" element={<Home />} />
        {menus.map((m) => 
          {
            return (<Route key={m.id} path={m.path} element={m.element} />)
          })
        }

        <Route path="/portafolio/:projectName" element={<PortfolioDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* FOOTER */}

      <Footer />

    </BrowserRouter>
  )
}
