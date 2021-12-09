import { api_key, base_url } from './settings';

export function login() {
  fetch(`${base_url}/authentication/guest_session/new?api_key=${api_key}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      localStorage.setItem('guest_session_id', data.guest_session_id);
      window.location.reload(false);
      return data.request_token;
    });
}
