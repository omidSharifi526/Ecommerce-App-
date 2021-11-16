import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "jquery";
import "@popperjs/core/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";


import "fontawesome"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

