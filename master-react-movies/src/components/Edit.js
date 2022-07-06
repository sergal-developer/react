import React, { useEffect, useState } from 'react'
import { getMovieLS, saveMovieLS } from '../common/helpers/moviesStorage';

export const Edit = ({ item, setItem, setList }) => {
    let idSubmit = 'editform';
    const [idForm, setIdForm] = useState('');
    const [cover, setCover] = useState('');

    useEffect(() => {
        getInfo();
        return (() => { })
    }, []);

    const getInfo = () => {
        // let _movie = item;
        setIdForm(`${idSubmit}-${item.id}`);

        setTimeout(() => {
            const data = document.getElementById(`${idSubmit}-${item.id}`);

            if (!data) return;
            // data.title.value = item.title || '';

            // data.score.value = item.score || '';
            // data.cover.value = item.cover || '';
            setCover(item.cover);
            // data.description.value = item.description || '';
        }, 100);
    }

    const updateImage = e => {
        const data = e.target.value;
        setCover(data);
    }

    const onSubmit = e => {
        e.preventDefault();

        const data = e.target;
        // const data = document.getElementById(`${idSubmit}-${item.id}`);
        const movies = getMovieLS();
        // let movies = moviesListState;

        let _movie = {
            id: item.id,
            title: data.title.value,
            score: data.score.value || 90,
            cover: data.cover.value,
            description: data.description.value || data.title.value,
        };
        const index = movies.findIndex(e => e.id === _movie.id);
        console.log('index: ', index);
        movies[index] = _movie;
        //let newList = movies.map(obj => _movie.find(o => o.id === obj.id) || obj);

        saveMovieLS(movies);
        setList(movies)
        onClose(e);
    }

    const onClose = e => {
        setItem([]);
    }

    return (
        <div className="cards_item modal">
            <div className="container">
                {
                    item ? (
                        <>
                            <form onSubmit={onSubmit} id={idForm} >
                                <input type='text' placeholder='title' name='title' defaultValue={ item.title } />
                                <input type='text' placeholder='score' name='score' defaultValue={ item.score } />
                                <input type='text' placeholder='cover' name='cover' onChange={updateImage} defaultValue={ item.cover }/>
                                <textarea placeholder='description' name='description' defaultValue={ item.description }></textarea>

                                <div className='constrols'>
                                    <button type='submit' name='save'>Guardar</button>
                                    <button type='button' name='close' onClick={onClose}>Cancel</button>
                                </div>
                            </form>
                            <div className='cover'> <img src={cover} alt={item.cover} /> </div>
                        </>
                    )
                        : (
                            <h3>No edit</h3>
                        )
                }


            </div>
        </div>
    )
}
