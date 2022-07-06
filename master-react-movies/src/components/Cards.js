import React, { useEffect, useState } from 'react'
import { deleteMovieLS, getMovieLS } from '../common/helpers/moviesStorage';
import { Create } from './Create';
import { Edit } from './Edit';

export const Cards = ({ list, setList }) => {
    const [editItem, setEditItem] = useState([]);

    useEffect(() => {
        const data = getMovieLS();
        if (data) {
            setList(data);
        }

        return (() => { })
    }, []);

    const onDelete = (e, item) => {
        let newlist = deleteMovieLS(item);
        setList(newlist);
    }

    const onEdit = (e, item) => {
        setEditItem([item]);
    }

    return (
        <>
            <div className='cards'>
                <Create setList={setList} />
                { editItem.length && <Edit item={ editItem[0] } setItem={ setEditItem } setList={setList} />}
                {
                    list.map((peli) => {
                        return (
                            <>
                                <div className="cards_item" key={peli.id}>
                                    <div className='cover'> <img src={peli.cover} alt={peli.title} /> </div>
                                    <div className="name">
                                        {peli.title}
                                    </div>
                                    <div className="controls">
                                        <div className="action" onClick={ e => { onEdit(e, peli); }}> <i className="ri-edit-box-line"></i> </div>
                                        <div className="action" onClick={e => { onDelete(e, peli); }}> <i className="ri-delete-bin-line"></i> </div>
                                        <div className="action">Ver</div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </>
    )
}
