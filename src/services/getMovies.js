import { api_key, base_url } from './settings';

/**
 *@name getMovies
 * @param {*} param0 Recibe el parametro keword que ahce referencia a la pagina activa de la consulta
 * @description Hace una peticion a al api con la api_key y la pagina requerida a la seccion discover
 * @returns Retorna un objeto con las peliculas y datos de paginación
 */

export function getMovies({ keyword }) {
  if (keyword.value) {
    return fetch(
      `${base_url}/discover/movie?api_key=${api_key}${keyword.value}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }
}
