import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import { SessionProvider } from './Context/SessionProvider';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Entrada de la app por el componente Home envuelta por el contexto de session y enrutamiento
 * @author [Julian Andres Rendon Parra]
 */

ReactDOM.render(
  <SessionProvider>
    <Router>
      <Home />
    </Router>
  </SessionProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
