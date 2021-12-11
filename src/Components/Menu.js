import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { login } from '../services/login';

export default function Menu() {
  let location = useLocation();

  const [log, setLogin] = useState(localStorage.getItem('guest_session_id'));

  const loguear = (e) => {
    login();
    setLogin(localStorage.getItem('guest_session_id'));
  };
  if (log) {
    return (
      <>
        <header className='w-full z-50 sticky inset-0  bg-white bg-opacity-90 flex flex-col py-3 justify-center gap-2'>
          <h1 className='text-7xl text-rojo font-extrabold'>NextFlix</h1>
          {location.pathname === '/milista/' ? (
            <Link to='/'>
              <button className='bg-rojo text-white px-4 py-1 font-semibold'>
                Volver al Inicio
              </button>
            </Link>
          ) : (
            <Link to={`/milista/`}>
              <button className='bg-rojo text-white px-4 py-1 font-semibold'>
                My Lista
              </button>
            </Link>
          )}
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className='w-full z-50 sticky inset-0  bg-white bg-opacity-75 flex flex-col justify-center gap-2'>
          <h1 className='text-7xl pt-5 text-rojo font-extrabold'>NextFlix</h1>
          <button
            className='bg-rojo text-white px-4 py-1 font-semibold'
            onClick={() => {
              loguear();
            }}
          >
            Inicia Sessión
          </button>
        </header>
      </>
    );
  }
}
