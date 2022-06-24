import React, { useState, useRef, useEffect } from 'react';
import './App.scss';
import DataSource from './json/task.json'
import TodoList from './components/TodoList/TodoList';
import uuid from 'react-uuid'

const KEYSTORAGE = 'TODOAPP2';

const App = () => {
  const [data, setData] = useState([]);
  const itemRef = useRef();
  const [taskRemaining, setTaskRemaining] = useState(0);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEYSTORAGE));
    console.log('storedTodos: ', storedTodos);
    if ( storedTodos && storedTodos.length ) {
      setData(storedTodos);
    } else {
      setData(DataSource);
    }

    console.log(data);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEYSTORAGE, JSON.stringify(data))
  }, [ data ]);

  const handleClearSelected = () => {
    const newData = data.filter((i) => !i.completed);
    setData(newData);
    getTaskRemaining();
  }

  const toggleItem = (id) => {
    const newItem = [...data];
    const item = newItem.find((i) => i.id === id);
    item.completed = !item.completed;
    setData(newItem);
    getTaskRemaining();
  }

  const handleTodoAdd = () => {
    const task = itemRef.current.value;
    if (task === '') return;

    setData((prev) => {
      return [...prev, { id: uuid(), task: task, completed: false }];
    })

    itemRef.current.value = null;
    getTaskRemaining();
  }

  const handleSelectAll = () => {
    const newData = [...data];
    newData.forEach((i) => { i.completed = !i.completed; });
    setData(newData);
    getTaskRemaining();
  }

  const getTaskRemaining = () => {
    setTaskRemaining((prev) => {
      return data.filter((i) => !i.completed).length
    });
  }

  return (
    <>
      <button onClick={handleSelectAll}>Selecionar todos</button>
      <TodoList list={data} toggleItem={toggleItem} />
      <input ref={itemRef} type="text" placeholder='Nueva Tarea' />
      <button onClick={handleTodoAdd}>Agregar</button>
      <button onClick={handleClearSelected}>Eliminar</button>

      <div>Te quedan {taskRemaining} por completar</div>
    </>
  )
};

export default App;
