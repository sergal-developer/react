import React from 'react'

export const Component1 = () => {
    let nombre = "sergio";
    const web = "sergio.g.com";
    let usuario = {
        nombre: 'Sergio',
        apellidos: 'Gallegos',
        web: 'sergio.gal.com.mx'
    }

  return (
    <>
        <h1>Usuario</h1>
        <ul>
            <li>Nombre: <strong>{ usuario.nombre } { usuario.apellidos }</strong></li>
            <li>Web: <strong>{ usuario.web }</strong></li>
        </ul>
        <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
        </ul>
        <div>Es es mi primer componente </div>
    </>
  )
}
