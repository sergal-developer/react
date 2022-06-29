import React from 'react';
import PropTypes from 'prop-types';

export const TercerComponente = ({nombre = 'sergio', apellidos = 'gallegos', ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <h3>Props</h3>
        <ul>
            <li>{ nombre }</li>
            <li>{ apellidos }</li>
            <li>{ ficha.altura }</li>
            <li>{ ficha.grupoSanguineo }</li>
            <li>{ ficha.estado }</li>
        </ul>

    </div>
  )
}


TercerComponente.propTypes = {
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: 'Esteban',
    apellidos: 'Martinez'
}