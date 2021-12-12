import { useState } from 'react';
import { CurrentMovie } from './CurrentMovie';
import { ListMovies } from './ListMovies';
import { useMyList } from '../Hooks/useMyList';

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
      <h2 className='font-bold text-rojo text-3xl border-b-2 border-rojo'>
        Mi Lista de Favoritos
      </h2>
      {myList.length > 0 ? (
        <ListMovies
          movies={myList}
          setShowMovie={setShowMovie}
          loading={loading}
        />
      ) : (
        <p>La lista esta vacia!!!</p>
      )}
    </>
  );
}
