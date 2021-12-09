import { api_key, base_url } from './settings';

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
