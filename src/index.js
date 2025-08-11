import React from 'react';
import ReactDOM from 'react-dom/client';
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import "react-lazy-load-image-component/src/effects/blur.css"
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

