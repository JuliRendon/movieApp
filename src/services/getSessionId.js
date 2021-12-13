import { api_key, base_url } from './settings';

/**
 * @name getSession
 * @description peticion Get para obtener un id de session como guest para poder votar.
 * @returns retorna un string con el id de la session.
 */

export function getSessionId() {
  return fetch(
    `${base_url}/authentication/guest_session/new?api_key=${api_key}`
  ).then((res) => {
    return res.json();
  });
}
