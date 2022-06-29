import React from 'react'

export const EventosComponente = (props) => {
    const handlerClick = (e, nombre) => {
        alert(`${ nombre }, has dado click al boton`);
    }
  return (
    <div>
        <button onClick={ e => handlerClick(e, 'Sergio') }> Dame Click</button>
    </div>
  )
}
