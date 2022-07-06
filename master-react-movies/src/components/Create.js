import React, { useEffect, useState } from 'react'
import { getMovieLS, saveMovieLS } from '../common/helpers/moviesStorage';

export const Create = ({ setList }) => {
    const title = 'Agregar pelicula';
    const [createState, setcreateState] = useState(false);
    const [movieState, setMovieState] = useState({});
    const [moviesListState, setMoviesListState] = useState([]);

    useEffect(() => {
        onGetMovies();
        return (() => { })
    }, []);

    const onGetMovies = () => {
        const data = getMovieLS();
        if (data) {
            setMoviesListState(data);
        }
        console.log('data: ', data);
    }

    const onSubmit = e => {
        e.preventDefault();

        let data = e.target;
        let movies = moviesListState;

        let _movie = {
            id: new Date().getTime(),
            title: data.title.value,
            score: data.score.value || 90,
            cover: data.cover.value,
            description: data.description.value || data.title.value,
        }

        movies.push(_movie);

        setMovieState(movies);
        saveMovieLS(moviesListState);
        setcreateState(false);
        setList(elementos => {
            return [...elementos, _movie];
        })
    }

    return (
        <div className="cards_item first">
            <div className="name">

                {
                    createState === false ? (
                        <button onClick={ e => { setcreateState(true) } }> Crear Pelicula </button>
                    )
                    : (
                        <>
                            <h2>{title}</h2>

                            <form onSubmit={onSubmit}>
                                <input type='text' placeholder='title' name='title' />
                                <input type='text' placeholder='score' name='score' />
                                <input type='text' placeholder='cover' name='cover' />
                                <textarea placeholder='description' name='description'></textarea>
                                <button type='submit' name='save'>Guardar</button>
                            </form>
                        </>
                    )

                }
            </div>
        </div>
    )
}
