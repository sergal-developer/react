import React from 'react'
import { Searcher } from './Searcher';

export const Menu = (props) => {
    const menus = props.menus || [];

    return (
        <>
            <div className="menus">
                {
                    menus.map((menu) => {
                        return (
                            <div className="item" key={menu.id}>{menu.name}</div>
                        )
                    })
                }

                <div className="item">
                    <Searcher />
                </div>
            </div>
        </>
    )
}
