import React from 'react'

export const EventosComponente = (props) => {
    const handlerClick = (e, nombre) => {
        alert(`${ nombre }, has dado click al boton`);
    }

    const handlerDblClick = (e, nombre) => {
        alert(`${ nombre }, has dado doble click al boton`);
    }
  return (
    <div>
        <button onClick={ e => handlerClick(e, 'Sergio') }> Dame Click</button>

        <button onDoubleClick={ e => handlerDblClick(e, 'Sergio') }> Doble Click</button>
    </div>
  )
}
