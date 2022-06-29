import React, { useState } from 'react'

export const EstadoComponente = () => {
    const [nombre, setNombre] = useState('Sergio');

    const cambiaNombre = e => {
        if (nombre === 'Sergio')
            setNombre('Gallegos Alvarado');
        else
            setNombre('Sergio');
    }

    return (
        <div>
            <h3>Manejo del estado</h3>
            <strong>{nombre}</strong>

            <button onClick={cambiaNombre}> Cambiar Nombre </button>
        </div>
    )
}
