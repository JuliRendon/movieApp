import { api_key, base_url } from './settings';

export function getMoviesHeader() {
  return fetch(`${base_url}/discover/movie?api_key=${api_key}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
