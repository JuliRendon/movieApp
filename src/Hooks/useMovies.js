import { useContext, useEffect, useState } from 'react';
import { getMovies } from '../services/getMovies';
import { MoviesContext } from '../Context/MovieProvide';

/**
 * @name useMovies
 * @type Hook
 * @param {keyword} keyword puede contener parametros de busqueda o params
 * @returns Retorna un arreglo de peliculas y el estado de la conslta del fetch con true si no hay error
 */

export function useMovies(keyword) {
  const [loading, setLoading] = useState(true);
  const { movies, setMovies } = useContext(MoviesContext);

  useEffect(() => {
    setLoading(true);
    getMovies({ keyword }).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [keyword, setMovies]);
  return { loading, movies };
}
