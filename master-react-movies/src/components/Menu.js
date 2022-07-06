import React from 'react'
import { Searcher } from './Searcher';

export const Menu = ({ menus, list, setList }) => {

    return (
        <>
            <div className="menus">
                {
                    menus.map((menu) => {
                        return (
                            <div className="item" key={menu.id}> <i className="ri-home-line"></i> {menu.name}</div>
                        )
                    })
                }

                <div className="item">
                    <Searcher list={ list } setList={ setList }  />
                </div>
            </div>
        </>
    )
}
