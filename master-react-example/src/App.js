import './App.css';
// import { AjaxComponent } from './components/AjaxComponent';
// import { EfectosComponet } from './components/EfectosComponet';
import { FormularioComponet } from './components/FormularioComponet';
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
        <FormularioComponet />
      </header>
    </div>
  );
}

export default App;
