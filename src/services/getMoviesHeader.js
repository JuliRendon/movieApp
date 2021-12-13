import { api_key, base_url } from './settings';

/**
 *@name getMoviesHeader
 * @description Hace una peticion a al api con la api_key a la seccion discover para usarla en el header
 * @returns Retorna un objeto con las peliculas y datos de paginación.
 */

export function getMoviesHeader() {
  return fetch(`${base_url}/discover/movie?api_key=${api_key}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
