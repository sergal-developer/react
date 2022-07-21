import React, { useEffect, useReducer } from 'react'
import { juegoReducer } from './juegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const EjemploReducers = () => {

    const [juegos, dispatch] = useReducer(juegoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('juegos', JSON.stringify(juegos))
    }, [juegos])

    const coneguirDatos = e => {
        e.preventDefault();
        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };

        console.log(juego);

        const accion = {
            type: 'crear',
            payload: juego
        };

        dispatch(accion);
        console.log(juegos);
    }

    const borrar = (id) => {
        const accion = {
            type: 'borrar',
            payload: id
        };

        dispatch(accion);
        console.log(juegos);
    }

    const editar = (e, id) => {
        const accion = {
            type: 'editar',
            payload: {
                id: id,
                titulo: e.target.value,
                descripcion: e.target.value,
            }
        };

        dispatch(accion);
        console.log(juegos);
    }

    return (
        <div>
            <h1>Estos son mis videojuegos</h1>
            <p>Número de videojuegos:15</p>
            <ul>
                {
                    juegos.map(j => (
                        <li key={j.id}>
                            {j.titulo} 
                            <button onClick={() => borrar(j.id)}>Borrar</button>
                            <input type="texto" placeholder='Editar titulo' 
                                onKeyPress={ (e) => { if ( e.key == 'Enter') {
                                                        editar(e, j.id);
                                                    }} }/>
                        </li>
                    ))
                }
            </ul>
            <h3>Agregar Juego</h3>
            <form onSubmit={coneguirDatos}>
                <input type="texto" name="titulo" placeholder='Titulo' />
                <textarea name="descripcion" placeholder='Descripción'></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
