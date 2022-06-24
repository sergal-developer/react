import React, { useRef } from 'react';
import './TodoItem.scss'

const TodoItem = ({ item, toggleItem }) => {
    const { id, task, completed } = item;
    const checkInputRef = useRef();
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
