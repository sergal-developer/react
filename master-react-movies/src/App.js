import './App.scss';

function App() {
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
  return (
    <>
      <div className="container">
        <header>
          <div className="logo">MOVIEFLIX</div>
          <div className="menus">
            <div className="item">Inicio</div>
            <div className="item">Peliculas</div>
            <div className="item">Blog</div>
            <div className="item">Contacto</div>

            <div className="item">
              <input type='text' placeholder='Buscar ...' name='search' />
            </div>
          </div>

        </header>
        <main className="container_main">
          <div className="container_inner">

            <div className='cards'>
              <div className="cards_item first">
                <div className="name">
                  <form>
                    <input type='text' placeholder='title' name='title' />
                    <input type='text' placeholder='score' name='score' />
                    <input type='text' placeholder='cover' name='cover' />
                    <textarea placeholder='description' name='description'></textarea>
                    <button type='submit' name='save'>Guardar</button>
                  </form>
                </div>
              </div>
              {
                peliculas.map((peli) => {
                  return (
                    <div className="cards_item" key={peli.id}>
                      <div className='cover'> <img src={peli.cover} /> </div>
                      <div className="name">
                        {peli.name}
                      </div>
                      <div className="controls">
                        <div className="action">Editar</div>
                        <div className="action">Borrar</div>
                        <div className="action">Ver</div>
                      </div>
                    </div>
                  )
                })
              }

            </div>


          </div>

        </main>
        <footer className="footer">
          © App React - <a href="">sergiogallegos.com</a>
        </footer>
      </div>
    </>
  );
}

export default App;
