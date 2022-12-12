import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from "./Router/router.js";

import './Assets/Styles/Reset/reset.css';
import './wrapper.css';
import './Assets/Index/Styles/EllipseEffect/ellipse.css';

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
