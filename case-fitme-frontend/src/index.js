import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initialize } from './Keycloak/keycloak';
import { ImSpinner3 } from "react-icons/im";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <p className='loading'>Please wait while keycloak is loading...<ImSpinner3 id="spin-loader"/></p>
)
initialize().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

})