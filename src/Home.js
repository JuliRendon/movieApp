import { MoviesList } from './Components/MoviesList';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MiLista } from './Components/MiLista';
import Menu from './Components/Menu';
import { MoviesContextProvider } from './Context/MovieProvide';

/**
 *
 * @name Home
 * @descripcion Hay dos path estaticos uno para el listado de peluculas por defecto y otro a la lista de peliculas votadas
 * @returns MoviesContextProvider con el contenedor general el componente <Menu> y las rutas
 *
 */
function Home() {
  return (
    <>
      <MoviesContextProvider>
        <div className='home flex flex-col justify-center items-center gap-y-6 pb-8'>
          <Menu />
          <Routes>
            <Route path='/' element={<MoviesList />} />
            <Route path='milista' element={<MiLista />} />
          </Routes>
        </div>
      </MoviesContextProvider>
    </>
  );
}

export default Home;
