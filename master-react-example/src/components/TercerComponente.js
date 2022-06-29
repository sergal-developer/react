import React from 'react'

export const TercerComponente = ({nombre, apellidos, ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <h3>Props</h3>
        <ul>
            <li>{ nombre }</li>
            <li>{ apellidos }</li>
            <li>{ ficha.altura }</li>
            <li>{ ficha.grupoSanguineo }</li>
            <li>{ ficha.estado }</li>
        </ul>

    </div>
  )
}
