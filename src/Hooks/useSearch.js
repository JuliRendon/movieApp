import { useEffect, useState } from 'react';
import { searchMovies } from '../services/searchMovies';

export function useSearchs() {
  const [moviesSearch, setMoviesSearch] = useState({});
  const [handleSearch, setHandleSearch] = useState('');

  useEffect(() => {
    if (handleSearch === null || handleSearch === '') return;
    searchMovies(handleSearch).then((data) => {
      //   console.log(data);
      setMoviesSearch(data);
    });
  }, [handleSearch]);
  return { moviesSearch, handleSearch, setHandleSearch, setMoviesSearch };
}
