import React from 'react';
import './TodoList.scss'

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ list, toggleItem }) => {
    return (
        <ul>
            {list?.map((i) => (
                <TodoItem key={ i.id } item={ i } toggleItem={ toggleItem } />
            ))}
        </ul>
    )
}

export default TodoList;
