import React, { useContext } from 'react'
import { PruebaContext } from '../contexts/PruebaContext'

export const Inicio = () => {

  // const ctxShared = useContext(PruebaContext);

  // const updateContext = () => {
  //   ctxShared.setUsuario(
  //     {
  //       id: 1, 
  //       titulo: 'Master en typescript',
  //       contenido: 'Muchas horas de contenido ...'
  //     }
  //   );
  //   console.log('ctxShared: ', ctxShared);
  // }
  // console.log('ctxShared: ', ctxShared);

  return (
    <div><h1>Inicio</h1>
    <p>Paguina de informacion Inicio</p>

    {/* <pre> { JSON.stringify( ctxShared )}</pre> */}
  {/* <button onClick={ updateContext }>Actualizar contexto</button> */}
    
    </div>
  )
}
