import { api_key, base_url } from './settings';

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
