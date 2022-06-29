import logo from './logo.svg';
import './App.css';
import { Component1 } from './components/Component1';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SegundoComponente />
      <Component1 />
      </header>
    </div>
  );
}

export default App;
