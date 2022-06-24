import React, { useState, useRef } from  'react';
import './App.scss';
import DataSource from './json/task.json'
import TodoList from './components/TodoList/TodoList';
import uuid from 'react-uuid'


const App = () => {
  const [data, setData] = useState(DataSource);
  const itemRef = useRef();

  const toggleItem = (id) => {
    const newItem = [...data];
    const item = newItem.find((i) => i.id === id);
    item.completed = !item.completed;
    setData(newItem);
  }
  const handleTodoAdd = () => {
    const task = itemRef.current.value;
    if ( task === '') return;

    setData((prev) => {
      return [...prev, { id: uuid(), task: task, completed: false}];
    })

    itemRef.current.value = null;
    console.log('[...data]: ', [...data]);
  }

  return (
    <>
      <TodoList list={ data } toggleItem={ toggleItem }/>
      <input ref={ itemRef } type="text" placeholder='Nueva Tarea' />
      <button onClick={ handleTodoAdd }>Agregar</button>
      <button>Eliminar</button>
    </>
  )
};

export default App;
