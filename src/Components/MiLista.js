import { useState } from 'react';
import { CurrentMovie } from './CurrentMovie';
import { ListMovies } from './ListMovies';
import { useMyList } from '../Hooks/useMyList';
import Menu from './Menu';

export function MiLista() {
  const { myList, loading } = useMyList();

  const [showMovie, setShowMovie] = useState({ show: false, movie: {} });

  return loading ? (
    <div>Cargando...</div>
  ) : (
    <>
      <CurrentMovie
        currentMovie={showMovie}
        onClose={() => setShowMovie({ show: false, movie: {} })}
      />
      <Menu />
      <h2 className='text-lg font-bold border-b-2 border-rojo'>
        Mi Lista de Favoritos
      </h2>
      <ListMovies
        movies={myList}
        setShowMovie={setShowMovie}
        loading={loading}
      />
    </>
  );
}
