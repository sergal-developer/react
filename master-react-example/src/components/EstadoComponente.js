import React, { useState } from 'react'

export const EstadoComponente = () => {
    const [nombre, setNombre] = useState('Sergio');

    const cambiaNombre = e => {
        if (nombre === 'Sergio')
            setNombre('Gallegos Alvarado');
        else
            setNombre('Sergio');
    }

    const cambiarNombre = (e, nuevoNombre) => {
            setNombre(nuevoNombre);
    }

    return (
        <div>
            <h3>Manejo del estado</h3>
            <strong className='label'>{nombre}</strong>

            <button onClick={cambiaNombre}> Cambiar Nombre </button>
            <input type="text" onChange={ e => cambiarNombre(e, e.target.value ) }/>
        </div>
    )
}
