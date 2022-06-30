import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AvisoComponent } from './AvisoComponent';

export const EfectosComponet = (prop) => {
  const [user, setuser] = useState(prop.user || '');
  const [date, setdate] = useState(prop.date || null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`has modificado el usuario ${counter} veces.`);
    setCounter(counter + 1);

    return () => {

    }
  }, [user])

  const updateUsername = (e, username = null) => {
    const value = username || e.target.value;
    if (value) {
      setuser(value);
    } else {
      console.log('Valor no valido!!');
    }
  }

  const newDate = e => {
    setdate(Date.now());
  };

  return (
    <>
      <h1>HOOK useEffect </h1>
      <strong className={counter >= 10 ? 'label label-green' : 'label'}>{user}</strong>
      <strong className='date'>{date}</strong>

      <form>
        <input type='text'
          onChange={updateUsername}
          placeholder='Cambia el nombre de usuario' />

      </form>

      <button onClick={newDate}>Actualiza Fecha</button>

      {user === "SERGIO" && <AvisoComponent />}

    </>
  )
}

EfectosComponet.propTypes = {
  user: PropTypes.string
}