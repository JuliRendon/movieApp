import { useContext } from 'react';
import { SessionContext } from '../Context/SessionProvider';

export default function LoginLogout() {
  const { session, dispatchSession } = useContext(SessionContext);

  return session.sessionState === false ? (
    <button
      className='w-52 bg-rojo text-white px-4 py-1 font-semibold'
      onClick={() => {
        dispatchSession({ type: 'login' });
      }}
    >
      Iniciar Sessión
    </button>
  ) : (
    <button
      className='bg-rojo text-white px-4 py-1 font-semibold'
      onClick={() => {
        dispatchSession({ type: 'logout' });
      }}
    >
      Cerrar Sessión
    </button>
  );
}
