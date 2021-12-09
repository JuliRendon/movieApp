import { useEffect, useState } from 'react';
import { getMoviesHeader } from '../services/getMoviesHeader';

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
