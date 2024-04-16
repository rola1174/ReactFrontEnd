import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginLogoutPage from './LoginLogoutPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LoginLogoutPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
