import { useContext } from 'react';
import { SessionContext } from '../Context/SessionProvider';
import useLocalStorage from '../Hooks/useLocalStorage';
import { getSessionId } from '../services/getSessionId';

export default function LoginLogout() {
  const [, setSession] = useLocalStorage('guest_session_id', '');
  const session = useContext(SessionContext);

  const login = () => {
    getSessionId().then((sessionId) => {
      setSession(sessionId.guest_session_id);
      window.location.reload(false);
    });
  };
  const logout = () => {
    setSession('');
    window.location.reload(false);
  };

  if (!session.session || session.session === '') {
    return (
      <button
        className='w-52 bg-rojo text-white px-4 py-1 font-semibold'
        onClick={() => {
          login();
        }}
      >
        Iniciar Sessión
      </button>
    );
  } else {
    return (
      <button
        className='bg-rojo text-white px-4 py-1 font-semibold'
        onClick={() => {
          logout();
        }}
      >
        Cerrar Sessión
      </button>
    );
  }
}
