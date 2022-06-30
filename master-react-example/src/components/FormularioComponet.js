import React, { useState } from 'react'

export const FormularioComponet = () => {

    const [user, setUser] = useState({});
    const [userKeys, setUserKeys] = useState([]);

    const conseguirDatosFormulario = e => {
        e.preventDefault();
        let datos = e.target;

        let _usuario = {
            name: datos.name.value,
            lastName: datos.lastName.value,
            gender: datos.gender.value,
            bio: datos.bio.value,
        }

        setUser(_usuario);
        decodeUser();
        console.log('_usuario: ', _usuario);
    }

    const cambiarDatos = e => {
        let inputName = e.target.name;
        console.log('inputName: ', inputName);
        let newUser = user;

        // newUser[inputName] = e.target.value;
        setUser(statePrev => {
            return {
                ...statePrev,
                [inputName]: e.target.value
            }
        });
        decodeUser();
    }


    const decodeUser = () => {
        const keys = Object.keys(user);
        const result = [];
        keys.forEach((key) => {
            result.push({ id: key, value: user[key] })
        });
        setUserKeys(result);
    }

    return (
        <div>
            <h1>Formularios con react</h1>

            <div className='info_usuario'>
                {
                    userKeys.map((item, index) => {
                        return (
                            <div key={index}>{item.id}: {item.value}</div>
                        )
                    })
                }
            </div>

            <form onSubmit={conseguirDatosFormulario}>
                <input type="text" placeholder='Nombre' name="name" onChange={cambiarDatos} />
                <input type="text" placeholder='Apellido' name="lastName" onChange={cambiarDatos} />
                <select name="gender" onChange={cambiarDatos}>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name="bio" placeholder='Biografia' onChange={cambiarDatos}></textarea>

                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}
