import { api_key, base_url } from './settings';

/**
 * @name voteMovie
 * @param {*} idMovie id de la pelicula votada
 * @param {*} voteMovie voto dado a la pelicula entre 0.0 y 10 con decimal 0 o 5.
 * @param {*} setMessage funcion modificadora de estado para almacenar la respuesta de la api
 * @returns retorna un objeto con los datos de respuesta status_code = 1 para ok.
 */

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
      return response.json();
    })
    .then((data) => {
      if (data.status_code === 1) {
        setMessage('Voto Registrado con exito');
      } else {
        setMessage(data.status_message);
        console.log(data);
      }

      return data;
    });
}
