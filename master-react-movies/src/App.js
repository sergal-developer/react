import { useState } from 'react';
import './App.scss';
import { Cards } from './components/Cards';
import { Menu } from './components/Menu';

function App() {

  const [list, setList] = useState([]);

  const peliculas = [
    { id: 1, name: 'Doctor Strange en el multiverso de la locura', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uOnutpXJdDWyWzUCkApkahPSKuy.jpg' },
    { id: 2, name: 'Animales fantásticos: Los secretos de Dumbledore', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg' },
    { id: 3, name: 'Sonic 2: La película', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/yNpSqsRuLyyrRltXvtrbXhZinqO.jpg' },
    { id: 4, name: 'Dog: Un viaje salvaje', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uOnutpXJdDWyWzUCkApkahPSKuy.jpg' },
    { id: 5, name: 'La ciudad perdida', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/grEVYkBAVIzQ4JmZ7ydceN9DFQR.jpg' },
    { id: 6, name: 'Jurassic World: Dominion', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/sXeWfpT1EhG7f4uBouqraOhmouH.jpg' },
    { id: 7, name: 'Gran tiburón blanco', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/u7aC1Zx3T1SflO5sh2BGbge8N19.jpg' },
    { id: 8, name: 'Uncharted', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6hlI9Ea1O4IeJ2cj7OiNinqg8Qd.jpg' },
    { id: 9, name: 'Red', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/hUupIkIKPpNLYniPGRxRpEQFrX3.jpg' },
    { id: 10, name: 'Spider-Man: No Way Home', score: 78, cover: 'https://www.themoviedb.org/t/p/w220_and_h330_face/osYbtvqjMUhEXgkuFJOsRYVpq6N.jpg' }
  ];

  const menus = [
    { id: 1, name: 'Inicio' },
    { id: 2, name: 'Peliculas' },
    { id: 3, name: 'Blog' },
    { id: 4, name: 'Contacto' },
  ];


  return (
    <>
      <div className="container remixicon">
        <header>
          <div className="logo">MOVIEFLIX</div>
          <Menu menus={menus} />

        </header>
        <main className="container_main">
          <div className="container_inner">

            <Cards list={ list } setList={ setList }  />

          </div>

        </main>
        <footer className="footer">
          © App React - <a href='https://fonts.google.com/'>sergiogallegos.com</a>
        </footer>
      </div>
    </>
  );
}

export default App;
