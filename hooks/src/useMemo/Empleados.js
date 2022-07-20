import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
    ({ page }) => {
        const [empleados, setEmpleados] = useState([]);

        const getEmpleados = async () => {
            const url = `https://reqres.in/api/users?page=${page}`;
            const request = await fetch(url);
            const _empleados = await request.json();

            console.log('se ejecuto peticion ajax');
            setEmpleados(_empleados.data);
        }

        useEffect(() => {
            getEmpleados();
        }, [page]);

        useEffect(() => {
            console.log('se ha renderizado el componente');
        }, [empleados]);


        return (
            <div>
                <ul className='empleados'>
                    {
                        empleados.length >= 1 &&
                        empleados.map((e, idex) => {
                            return <li key={idex}>{e.first_name} {e.last_name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
);
