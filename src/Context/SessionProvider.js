import { createContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const SessionContext = createContext('');

export function SessionProvider({ children }) {
  const [session, setSession] = useLocalStorage('guest_session_id', '');
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
}
