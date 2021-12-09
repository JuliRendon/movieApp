// import { useEffect } from 'react';
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
        <h1 className='text-7xl pt-5 text-rojo font-extrabold'>NextFlix</h1>
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
      </>
    );
  } else {
    return (
      <>
        <h1 className='text-7xl pt-5 text-rojo font-extrabold'>NextFlix</h1>
        <button
          className='bg-rojo text-white px-4 py-1 font-semibold'
          onClick={() => {
            loguear();
          }}
        >
          Inicia Sessión
        </button>
      </>
    );
  }
}
