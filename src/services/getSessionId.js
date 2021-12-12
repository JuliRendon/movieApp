import { api_key, base_url } from './settings';

export function getSessionId() {
  return fetch(
    `${base_url}/authentication/guest_session/new?api_key=${api_key}`
  ).then((res) => {
    return res.json();
  });
}
