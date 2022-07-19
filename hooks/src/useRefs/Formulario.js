import React, { useRef } from 'react'

export const Formulario = () => {
  const nombre = useRef();
  const apellido = useRef();
  const correo = useRef();
  const descripcion = useRef();
  const divInput = useRef();

  const mostrar = e => {
    e.preventDefault();
    console.log(nombre.current.value);
    console.log(apellido.current.value);
    console.log(correo.current.value);
    console.log(descripcion.current.value);

    console.log(divInput);
    let { current: box } = divInput;
    box.classList.add('fondoVerde')
    box.innerHTML = "formulario enviado";
  }
  return (
    <div>
      <div className='myCaja' ref={ divInput }>
        <p>Pruebas de UseRef</p>
      </div>
      
      <form onSubmit={ mostrar}>
        <input type="text" name="" placeholder="nombre" ref={ nombre }/>
        <input type="text" name="" placeholder="apellido" ref={ apellido } />
        <input type="email" name="" placeholder="email" ref={ correo }/>
        <input type="text" name="" placeholder="descripcion" ref={ descripcion }/>

        <button type="submit">Enviar</button>
      </form>


      <button type="button" onClick={() => { nombre.current.select(); }}>Select</button>
    </div>
  )
}
