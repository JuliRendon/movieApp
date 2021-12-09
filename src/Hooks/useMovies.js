import { useEffect, useState } from 'react';
import { getMovies } from '../services/getMovies';
// import { Login } from '../services/Login';

export function useMovies(keyword) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    setLoading(true);
    getMovies({ keyword }).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [keyword]);
  return { loading, movies };
}
