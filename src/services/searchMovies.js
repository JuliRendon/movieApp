import { api_key, base_url } from './settings';

/**
 * @name searchMovies
 * @param {*} text recibe el texto a consultar en la api me diante la key y la api_key
 * @returns retorna un objeto con la lista de peliculas y datos de paginacion
 */

export function searchMovies(text) {
  return fetch(`${base_url}/search/movie?api_key=${api_key}&query=${text}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
