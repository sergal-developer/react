import logo from './logo.svg';
import './App.css';
import { Component1 } from './components/Component1';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';

function App() {
  let fichaMedica = {
    altura: 1.72,
    grupoSanguineo: "0-",
    estado: 'Normal'
  }
  const nombre = 123;
  return (
    <div className="App">
      <header className="App-header">
        <TercerComponente
          ficha={ fichaMedica }
        />
        <SegundoComponente />
        <Component1 />
      </header>
    </div>
  );
}

export default App;
