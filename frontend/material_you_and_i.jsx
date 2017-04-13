import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  let root = document.getElementById('root');
  render(<App store={store}/>, root);
});
