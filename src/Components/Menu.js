import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SessionContext } from '../Context/SessionProvider';
import LoginLogout from './LoginLogout';

export default function Menu() {
  let location = useLocation();
  const session = useContext(SessionContext);

  return (
    <>
      <header className='w-full z-50 sticky inset-0  bg-white bg-opacity-90 flex flex-col py-3 justify-center gap-2'>
        <h1 className='text-7xl text-rojo font-extrabold'>NextFlix</h1>
        <div className='flex  justify-center gap-2'>
          {session.session !== '' ? (
            location.pathname === '/milista/' ? (
              <Link to='/'>
                <button className='bg-rojo text-white px-4 py-1 font-semibold'>
                  Volver al Inicio
                </button>
              </Link>
            ) : (
              <>
                <Link to={`/milista/`}>
                  <button className='bg-rojo text-white px-4 py-1 font-semibold'>
                    My Lista
                  </button>
                </Link>
                <LoginLogout />
              </>
            )
          ) : (
            <LoginLogout />
          )}
        </div>
      </header>
    </>
  );
}
