import { api_key, base_url } from './settings';

/**
 *@name getList 
 @description hace una peticion Get a la api con el api_key y el id de session para recibir una lista de peliculas votadas
 * @returns Retorna un objeto con la lista de peliculas votadas por la session activa gues y datos de apginacion.
 */

export function getList() {
  const session_id = localStorage.getItem('guest_session_id');

  return fetch(
    `${base_url}/guest_session/${session_id}/rated/movies?api_key=${api_key}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.results;
    });
}
