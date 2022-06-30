import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(() => {
    console.log('El componente AvisoComponent esta montado');

    return () => {
      alert("Componente se desmonta");
    }
  }, []);



  return (
    <>
        <div>Aviso Component</div>
        <button onClick={ e => { alert('Biemvenido') } }>Mostrar Alerta</button>
    </>
  )
}
