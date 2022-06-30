import './App.css';
import { EfectosComponet } from './components/EfectosComponet';
// import { Ejercicio1Componet } from './components/Ejercicio1Componet';
// import { Component1 } from './components/Component1';
// import { SegundoComponente } from './components/SegundoComponente';
// import { TercerComponente } from './components/TercerComponente';
// import { EventosComponente } from './components/EventosComponente';
// import { EstadoComponente } from './components/EstadoComponente';

function App() {
  let fichaMedica = {
    altura: 1.72,
    grupoSanguineo: "0-",
    estado: 'Normal'
  }

  let usuario = 'Sergio Gallegos';

  return (
    <div className="App">
      <header className="App-header">
        <EfectosComponet user={ usuario } />
      </header>
    </div>
  );
}

export default App;
