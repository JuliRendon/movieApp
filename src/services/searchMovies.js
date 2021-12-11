import { api_key, base_url } from './settings';

export function searchMovies(text) {
  return fetch(`${base_url}/search/movie?api_key=${api_key}&query=${text}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
