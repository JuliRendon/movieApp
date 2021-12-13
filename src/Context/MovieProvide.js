import { createContext, useState } from 'react';

/**
 * @name MoviesContext
 * @description Contexto que almacena las peliculas devueltas por el Hook useMovies sin query ni params
 * @returns Retorna un Provider que envuelve la api con las peliculas obtenidas
 */

export const MoviesContext = createContext({});
export function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}
