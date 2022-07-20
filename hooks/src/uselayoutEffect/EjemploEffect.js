import React, { useEffect, useLayoutEffect, useRef } from 'react'

export const EjemploEffect = () => {

  let boton = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log("useEffect:Componente cargado !!!");
      let caja = document.querySelector("#caja");
      caja.innerHTML = "hola";
      console.log(caja.getBoundingClientRect());
    }, 5000);

  }, []);


  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("useLayoutEffect:Componente cargado !!!");
      let caja = document.querySelector("#caja");
      caja.innerHTML = "hola";
      console.log(caja.getBoundingClientRect());
      const { bottom } = boton.current.getBoundingClientRect();
      caja.current.style.top = `${bottom + 45}px`;
    }, 5000);
  }, []);


  const actualizar = e => {
    let caja = document.querySelector("#caja");
    const { bottom } = boton.current.getBoundingClientRect();
    boton.current.style.top = `${bottom + 150}px`;
  }


  return (
    <div>
      <h1>Ejemplo use effect y use LayoutEffect</h1>
      <div id="caja" ref={boton} onClick={ actualizar }></div>
    </div>
  )
}
