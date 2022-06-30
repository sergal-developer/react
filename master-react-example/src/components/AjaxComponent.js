import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Metodos genericos
    const getUsuarios = () => {
        setUsuarios([
            {
                id: 7,
                email: "michael.lawson@reqres.in",
                first_name: "Michael",
                last_name: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                id: 8,
                email: "lindsay.ferguson@reqres.in",
                first_name: "Lindsay",
                last_name: "Ferguson",
                avatar: "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                id: 9,
                email: "tobias.funke@reqres.in",
                first_name: "Tobias",
                last_name: "Funke",
                avatar: "https://reqres.in/img/faces/9-image.jpg"
            },
        ]);
    }

    useEffect(() => {
        // getUsuariosAJAX();
        getUsuariosAsync();
    }, [])

    const getUsuariosAJAX = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data);
                },
                error => { console.log(error)}
            )
    }

    const getUsuariosAsync = async() => {
        const peticion = await fetch('https://reqres.in/api/users?page=2');
        const {data} = await peticion.json();
        console.log('data: ', data);
        if ( data ) {
            setUsuarios(data);
        }
    }

    return (
        <div>
            <h2>Listado de Usuario por AJAX</h2>

            <ol className='usuarios'>
                {
                    usuarios.map((usuario, index) => {
                        return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                    })
                }
            </ol>
        </div>
    )
}
