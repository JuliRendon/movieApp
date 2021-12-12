import { Link, useMatch } from 'react-router-dom';
import { useContext } from 'react';
import { SessionContext } from '../Context/SessionProvider';
import LoginLogout from './LoginLogout';

export default function Menu() {
  const { session } = useContext(SessionContext);
  let locationMatch = useMatch('/milista');

  return (
    <>
      <header className='w-full z-50 sticky inset-0  bg-white bg-opacity-90 flex flex-col py-3 justify-center gap-2'>
        <h1 className='text-7xl text-rojo font-extrabold'>NextFlix</h1>
        <div className='flex  justify-center gap-2'>
          {session.sessionState ? (
            locationMatch ? (
              <Link
                to='/'
                className='bg-rojo text-white px-4 py-1 font-semibold'
              >
                Volver al Inicio
              </Link>
            ) : (
              <>
                <Link
                  to={`/milista/`}
                  className='bg-rojo text-white px-4 py-1 font-semibold'
                >
                  My Lista
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
