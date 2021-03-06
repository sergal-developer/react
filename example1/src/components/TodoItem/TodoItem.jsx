import React from 'react';
import './TodoItem.scss'

const TodoItem = ({ item, toggleItem }) => {
    const { id, task, completed } = item;

    const handleTodoClick = () => {
      toggleItem(id);
    }

    return (
        <li>
          <input type="checkbox" checked={ completed } onChange={ handleTodoClick }/>
          { task }
        </li>
    )
}

export default TodoItem;
