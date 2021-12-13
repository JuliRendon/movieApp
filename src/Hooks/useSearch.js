import { useEffect, useState } from 'react';
import { searchMovies } from '../services/searchMovies';

/**
 * @name useSearchs
 * @description realiza busquedas en la api segun se ingrese texto en el form de MoviesList
 * @returns Retorna dos estados y sus funciones modificadoras, uno para manejar el form y otro con los resultados de busquda
 */

export function useSearchs() {
  const [moviesSearch, setMoviesSearch] = useState({});
  const [handleSearch, setHandleSearch] = useState('');

  useEffect(() => {
    if (handleSearch === null || handleSearch === '') return;
    searchMovies(handleSearch).then((data) => {
      setMoviesSearch(data);
    });
  }, [handleSearch]);
  return { moviesSearch, handleSearch, setHandleSearch, setMoviesSearch };
}
