import { useContext, useEffect, useState } from 'react';
import { getMovies } from '../services/getMovies';
import { MoviesContext } from '../Context/MovieProvide';
// import { Login } from '../services/Login';

export function useMovies(keyword) {
  const [loading, setLoading] = useState(true);
  const { movies, setMovies } = useContext(MoviesContext);
  // const [movies, setMovies] = useState({});

  useEffect(() => {
    setLoading(true);
    getMovies({ keyword }).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [keyword, setMovies]);
  return { loading, movies };
}
