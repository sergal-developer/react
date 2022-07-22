
import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './contexts/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const _usuario = JSON.parse(localStorage.getItem("user"));
    setUsuario(_usuario);
  }, []);

  useEffect(() => {
    if ( !usuario && !usuario.username ) { return; }

    localStorage.setItem("user", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <div className='app' >
      <PruebaContext.Provider value={{ usuario, setUsuario }}>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
