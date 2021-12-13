import { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { SessionContext } from '../Context/SessionProvider';
import { useMyList } from '../Hooks/useMyList';
import { voteMovie } from '../services/voteMovie';
import LoginLogout from './LoginLogout';

/**
 *@name CurrenteMovie
 *@description Muestra la pelicula que se ha clicado en un overlay con todas sus propiedades y la opcion de votar.
 * @param {currentMovie, onClose} param0
 * @constant CurrentMovie llega por parametros, es un estado con un objeto { show: false, movie: {} }.
 * @function onClose Llega por parametros y modifica el estado de Current movie borrando las propiedades del objeto
 * @returns Retorna un overlay con la informaciond e la pelicula seleccionada y un form de votación o message si ya se voto.
 * @function VoteMovie se ejecuta para enviar el voto de al pelicula
 * @require {session} que viene del contexto e indica si se esta logueado para poder votar.
 */

export function CurrentMovie({ currentMovie, onClose }) {
  const { session } = useContext(SessionContext);
  const [handleVote, setHandleVote] = useState('');
  const { myList, loading } = useMyList();
  const [message, setMessage] = useState('');

  let mylistid = [];

  !loading && session.sessionState
    ? (mylistid = myList.map((movie) => movie.id))
    : (mylistid = []);

  const handleChange = (e) => {
    setHandleVote(e.target.value);
  };

  const voteMovies = (e) => {
    e.preventDefault();
    voteMovie(currentMovie.movie.id, Number(handleVote), setMessage);
    setHandleVote('Gracias por tu voto');
    mylistid = myList.map((movie) => movie.id);
  };

  const style = {
    cerrar: 'transform scale-150 rotate-45 text-white',
    overlay:
      'Overlay flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-70 z-50',
    contenedor:
      'relative overflow-x-hidden max-w-4xl top-6 flex flex-wrap justify-center gap-x-4 gap-y-4',
    movieBox: 'shadow_movie relative w-52 h-80 flex justify-center ',
    movieDescription:
      'backdrop-filter min-h-full h-full backdrop-blur bg-white bg-opacity-50 px-4 pb-10 w-11/12 sm:w-2/3 ',
  };

  if (!currentMovie.show) return null;
  return (
    <>
      <div className={style.overlay}>
        <article className={style.contenedor}>
          <div className={style.movieBox}>
            <img
              src={`https://image.tmdb.org/t/p/w300${currentMovie.movie.poster_path}`}
              alt={currentMovie.movie.original_title}
            />
            <div className='release_date'>
              <p className='p_release_date'>
                {currentMovie.movie.release_date}
              </p>
            </div>
          </div>
          <aside className={style.movieDescription}>
            <h2 className='pt-2 text-xl font-bold text-rojo min-w-full '>
              {currentMovie.movie.title}
            </h2>
            {currentMovie.movie.adult ? (
              <div className='text-rojo'>
                <h3 className='text-rojo'>Publico: </h3> <p>Adultos</p>
              </div>
            ) : (
              <div className='flex justify-start gap-x-2'>
                <h3 className='text-rojo font-bold'>Publico: </h3> <p> Todos</p>
              </div>
            )}
            <div className='flex justify-start gap-x-2'>
              <h3 className='text-rojo font-bold'>Idioma: </h3>{' '}
              <p> {currentMovie.movie.original_language}</p>
            </div>
            <div className='flex justify-start gap-x-2'>
              <h3 className='text-rojo font-bold'>Reseña: </h3>{' '}
              <p className='text-justify'> {currentMovie.movie.overview}</p>
            </div>
            <div className='flex justify-start gap-x-2'>
              <h3 className='text-rojo font-bold'>Popularidad: </h3>{' '}
              <p> {currentMovie.movie.popularity}</p>
            </div>
            <div className='flex  flex-row justify-start gap-x-2 align-baseline'>
              <h3 className='text-rojo font-bold'>Votos: </h3>
              <div className='relative w-full bg-red-100 border  h-3.5 divide-x divide-transparent border-rojo  flex self-center'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vote, i) => {
                  if (vote < currentMovie.movie.vote_average) {
                    return <div key={vote} className='w-2/6 bg-rojo '></div>;
                  } else {
                    return <div key={vote} className='w-2/6 bg-red-300'></div>;
                  }
                })}
                <p className='absolute text-xs text-white font-bold w-full top-0 leading-none'>
                  {currentMovie.movie.vote_average}/10
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              {mylistid.includes(currentMovie.movie.id) ? (
                <h2 className='text-rojo font-bold'>
                  Ya votaste esta pelicula
                </h2>
              ) : session.sessionState === true ? (
                <form
                  action=''
                  className='relative w-6/12 gap-y-2'
                  onSubmit={voteMovies}
                >
                  <label htmlFor='vote' className='text-rojo font-bold'>
                    Valora este titulo:
                  </label>
                  <input
                    id='vote-input'
                    name='vote'
                    value={handleVote}
                    onChange={handleChange}
                    type='text'
                    placeholder='Ingresa un voto entre 1 y 10'
                    className=' text-rojo h-6 border px-2 border-rojo w-full outline-none'
                  />
                  <button className='bg-rojo font-bold text-white px-3 mt-2'>
                    Votar
                  </button>
                </form>
              ) : (
                <>
                  <p>Inicia Sessión para votar esta Pelicula</p>
                  <LoginLogout />
                </>
              )}
            </div>
            <Message message={message} />
          </aside>
          <button
            onClick={onClose}
            className='absolute top-0 right-0 bg-rojo p-2 rounded-full'
          >
            <FaPlus className={style.cerrar} />
          </button>
        </article>
      </div>
    </>
  );
}

export function Message({ message, close }) {
  if (message === '') return null;
  const style = {
    contenedor:
      'Overlay overflow-auto flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-transparent z-50',
    mensaje:
      'text-white flex flex-col justify-center items-center relative backdrop-filter p-3 h-min backdrop-blur bg-rojo bg-opacity-75 px-4 pb-10 w-11/12 sm:w-2/3 ',
    boton: 'text-black w-1/3 bg-white p-2 mt-2',
  };

  return (
    <div className={style.contenedor}>
      <article className={style.mensaje}>
        {message}
        <Link to='/milista' className={style.boton}>
          ok!!
        </Link>
      </article>
    </div>
  );
}
