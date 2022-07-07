import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Persona = () => {
    let { nombre, apellido } = useParams();
    const navigate = useNavigate();

    apellido = apellido || 'Gallegos';

    const onSubmit = e => {
        e.preventDefault();
        let _nombre = e.target.nombre.value;
        let _apellido = e.target.apellido.value;

        navigate(`/persona/${ _nombre }/${ _apellido }`);
    }

    return (
        <div>
            {nombre ? (
                <>
                    <h1>Pagina Persona</h1>
                    <p>Esta persona {nombre} {apellido}</p>
                </>
            ) : (<h1> No hay persona que mostrar </h1>)
            }

            <form onSubmit={ onSubmit }>
                <input type="text" name="nombre" />
                <input type="text" name="apellido" />
                <input type="submit" name="enviar" value="enviar" />
            </form>
        </div>
    )
}
