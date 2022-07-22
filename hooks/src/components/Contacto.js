import React, { useContext } from 'react'
import { PruebaContext } from '../contexts/PruebaContext';

export const Contacto = () => {

  const ctxShared = useContext(PruebaContext);
  console.log('ctxShared: ', ctxShared);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Paguina de informacion Contacto</p>
    </div>
  )
}
