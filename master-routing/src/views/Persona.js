import React from 'react'
import { useParams } from 'react-router-dom';

export const Persona = () => {
    let { nombre, apellido } = useParams();
    apellido = apellido || 'Gallegos';

  return (
    <div>
        { nombre ? (
            <>
            <h1>Pagina Persona</h1>
            <p>Esta persona { nombre } { apellido }</p>
            </>
        ) : ( <h1> No hay persona que mostrar </h1>)}
    </div>
  )
}
