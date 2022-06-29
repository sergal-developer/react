import React from 'react'

export const SegundoComponente = () => {
    const libros = ['Harry Potter', 'Juego de tronos', 'Clean Code'];
    // const libros = []
  return (
    <div className='segundo-componente'>
        <h3>Listado de Libros</h3>

        { 
            libros.length >= 1 ? (
                <ul>
                {
                    libros.map((libro, index) => {
                        return  <li key={ index }> { index } {libro} </li>;
                    })
                }
                </ul>
            )
            : (
                <p> No Hay Libros</p>
            )
        }
    </div>
  )
}
