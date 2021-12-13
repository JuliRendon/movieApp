import { useEffect, useState } from 'react';
import { getMoviesHeader } from '../services/getMoviesHeader';

/**
 * @name useMoviesHeader
 * @type Hook
 * @description Hook para recuperar las peliculas usadas en el Header
 * @returns Retorna dos estados, uno con las peliculas obtenidas y otro con tru o false para saber si hubo error
 */

export function useMoviesHeader() {
  const [loading, setLoading] = useState(true);
  const [moviesHeader, setMoviesHeader] = useState([]);

  useEffect(() => {
    setLoading(true);
    getMoviesHeader().then((data) => {
      setMoviesHeader(data.results);
      setLoading(false);
    });
  }, []);
  return { loading, moviesHeader };
}
