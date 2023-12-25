
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';


import { createRoot } from 'react-dom/client';


document.body.style.backgroundColor = 'black';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
