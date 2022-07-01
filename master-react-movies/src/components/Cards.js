import React, { useEffect, useState } from 'react'
import { getMovieLS, saveMovieLS } from '../common/helpers/moviesStorage';
import { Create } from './Create';

export const Cards = (props) => {
    const [moviesListState, setMoviesListState] = useState([]);

    useEffect(() => {
        const data = getMovieLS();
        if (data) {
            setMoviesListState(data);
        }

        return (() => { setMoviesListState([]); })
    }, []);

    const onDelete = (e, item) => {
        let list = moviesListState;
        list = list.filter(i => i.id !== item.id);
        setMoviesListState(list);
        saveMovieLS(list);
    }

    return (
        <>
            <div className='cards'>
                <Create />
                {
                    moviesListState.map((peli) => {
                        return (
                            <div className="cards_item" key={peli.id}>
                                <div className='cover'> <img src={peli.cover} alt={peli.title} /> </div>
                                <div className="name">
                                    {peli.title}
                                </div>
                                <div className="controls">
                                    <div className="action">Editar</div>
                                    <div className="action" onClick={e => { onDelete(e, peli); }}>Borrar</div>
                                    <div className="action">Ver</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}
