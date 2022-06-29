import React from 'react'

export const EventosComponente = (props) => {
    const handlerClick = (e, nombre) => {
        alert(`${nombre}, has dado click al boton`);
    }

    const handlerDblClick = (e, nombre) => {
        alert(`${nombre}, has dado doble click al boton`);
    }

    const handlerMouse = (e, accion, nombre) => {
        console.log(`${nombre}, has ${accion} a la caja `);
    }

    const handlerFocusBlur = (e, accion) => {
        console.log(`Estas ${ accion } del input`);
    }

    return (
        <div>
            <button onClick={e => handlerClick(e, 'Sergio')}> Dame Click</button>

            <button onDoubleClick={e => handlerDblClick(e, 'Sergio')}> Doble Click</button>

            <div className='caja'
                onMouseEnter={e => handlerMouse(e, 'Entrado', 'Sergio')}
                onMouseLeave={e => handlerMouse(e, 'Salido', 'Sergio')}> Elemento con evento mouse </div>

            <hr />

            <input type="text" 
                onFocus={ e => handlerFocusBlur(e, 'Dentro') }
                onBlur={ e => handlerFocusBlur(e, 'Fuera') }
                placeholder="Introduce tu nombre" />
        </div>
    )
}
