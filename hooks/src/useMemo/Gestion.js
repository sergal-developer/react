import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados';

export const Gestion = () => {
    const [nombre, setNombre] = useState("");
    const [pagina, setPagina] = useState(1);

    const asignargestor = e => {
        // let _nombre = gestor.current.value;
        setNombre(e.target.value);
    }

    const nextPage = e => {
      setPagina(pagina + 1);
    }

    const prevPage = e => {
      const page = pagina === 1 ? 1 : pagina - 1;
      setPagina(page);
    }

    useEffect(() => {
      console.log("vista de gestion actualizada");
    }, [nombre, pagina]);

  return (
    <div>
        <h1>Gestor: { nombre }</h1>
        <input type="text" onChange={ asignargestor } placeholder="introduce el nmbre del gestor" />

        <h2>Listado de empleados</h2>
        <p>Los Usuarios son administrados por: { nombre } de jsonplaceholder...</p>
        
        
        <button onClick={ prevPage }>Anterior</button>
        <span>{ pagina }</span>
        <button onClick={ nextPage }>Siguiente</button>
        
        <Empleados page={ pagina }/>
    </div>
  )
}
