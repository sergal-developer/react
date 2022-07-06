import React, { useState } from 'react'
import { getMovieLS } from '../common/helpers/moviesStorage';

export const Searcher = ({ list, setList }) => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const onChange = e => {
    /* crear estado y actualziar el listad ocompleto de peliculas 

    filtrar para buscar coicidencias

    comrpobar si hay un resultado 

    dar valor de todo el localstorage

    actualizar estado del listado
    */
    setSearch( e.target.value);
    setNotFound(false);
    let _search = document.querySelector('#searcher').value;
    console.log('_search: ', _search);
    let found = list.filter(item => { return item.title.toLowerCase().includes(_search.toLowerCase())})

    if ( !_search.length ) {
      found = getMovieLS();
    } 
    if (!found.length) {
       found = getMovieLS();
       setNotFound(true);
   }


    setList(found);
  }

  return (
    <>
        <input type='text' placeholder='Buscar ...' name='search' autoComplete='off'
         value={ search }
         onChange={ onChange } id="searcher" /> 

         { notFound && <span>No se encontro un resultado</span> }
        <button type='submit' name='start_search'>buscar</button>
    </>
  )
}
