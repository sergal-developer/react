import React, { useMemo, useRef, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(6000);

    const tareaItem = useRef();

    const guardarTareas = e => {
        e.preventDefault();

        setTareas(tareas => [...tareas, e.target.descripcion.value])
        //e.target.descripcion.value = '';
    }

    const eliminarTarea = (id) => {
        let _newArr = tareas.filter((x, index) => index != id);
        setTareas(_newArr);
    }

    const sumarAlContador = e => {
        setContador(contador + 1);
    }
    const contadoresPasados = (acumulacion) => {
        for (let i = 0; i <= acumulacion; i++) {
            console.log("Ejecutando acumulación de contadores del pasado ...");
        }

        console.log(`acumulacion: ${acumulacion}`);
        return `Contador manual de tareas: ${acumulacion}`;
    }

    const memoContadores = useMemo(() => contadoresPasados(contador), [contador])

    return (
        <div className='tareas-container'>
            <h1> Mis Tareas</h1>
            <form onSubmit={guardarTareas}>
                <input type="text" name="descripcion" placeholder="Describe la tarea" />
                <input type="submit" value="Guardar" />
            </form>

            <h3>Lista de tareas</h3>

            <h3>{ memoContadores }</h3>
            <button onClick={sumarAlContador}> Sumar </button>

            <ul>
                {
                    tareas.map((x, index) => {
                        return (
                            <li key={index}>
                                <span>{x}</span>
                                <button onClick={() => eliminarTarea(index)}> Eliminar </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
