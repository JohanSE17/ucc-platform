import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.min.js";
window.$ = $;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);