import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Ejercicio1Componet = (prop) => {
  const [year, setyear] = useState(prop.year || new Date().getFullYear());

  const updateYear = (e, newYear = null) => {
    const value = newYear || e.target.value;
    let _newYear = !isNaN(value) ? parseInt(value, 10) : null;
    if (_newYear) {
      setyear(_newYear);
    } else {
      console.log('Valor no valido!!');
    }
  }

  const nextYear = e => {
    const newYear = year + 1;
    updateYear(e, newYear);
  }
  const prevYear = e => {
    const newYear = year - 1;
    updateYear(e, newYear);
  }

  return (
    <>
      <h1>Año Actual: <b>{year}</b></h1>
      <input type='text' onChange={updateYear} /> <br />
      <button onClick={nextYear}> Siguiente Año </button>
      <button onClick={prevYear}> Anterior Año </button>
    </>
  )
}


Ejercicio1Componet.propTypes = {
  year: PropTypes.number.isRequired
}