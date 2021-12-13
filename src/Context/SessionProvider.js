import { createContext, useReducer } from 'react';
import { getSessionId } from '../services/getSessionId';

/**
 * @name SessionContext
 * @description Contexto que contiene el reducer de sessión que maneja el login y logout
 * @returns Retorna un Provider con session y dispatch
 */

export const SessionContext = createContext({});

const sessionReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      getSessionId().then((sessionId) => {
        localStorage.setItem(state.keyToken, sessionId.guest_session_id);
      });
      return {
        ...state,
        keyToken: state.keyToken,
        sessionId: localStorage.getItem(state.keyToken),
        sessionState: true,
      };
    case 'logout':
      localStorage.setItem(state.keyToken, '');
      return {
        ...state,
        keyToken: state.keyToken,
        sessionId: localStorage.getItem(state.keyToken),
        sessionState: false,
      };
    default:
      return state;
  }
};

export function SessionProvider({ children }) {
  const [session, dispatchSession] = useReducer(sessionReducer, {
    keyToken: 'guest_session_id',
    sessionId: localStorage.getItem('guest_session_id'),
    sessionState: localStorage.getItem('guest_session_id') ? true : false,
  });
  return (
    <SessionContext.Provider value={{ session, dispatchSession }}>
      {children}
    </SessionContext.Provider>
  );
}
