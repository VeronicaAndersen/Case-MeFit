import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initialize } from './Keycloak/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <p className='loading'>Please wait while keycloak is loading...</p>
)
initialize().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

})