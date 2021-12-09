import { api_key, base_url } from './settings';

export function voteMovie(idMovie, voteMovie, setMessage) {
  const session_id = localStorage.getItem('guest_session_id');
  const body = { value: voteMovie };

  return fetch(
    `${base_url}/movie/${idMovie}/rating?api_key=${api_key}&guest_session_id=${session_id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      if (data.status_code === 1) {
        setMessage('Voto Registrado con exito');
      } else {
        setMessage('Upppsss... parece que algo fallo!!!');
        console.log(data);
      }

      return data;
    });
}
