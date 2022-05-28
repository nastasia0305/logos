import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'

import './assets/index.css';
import './assets/misc.css';
import './assets/buttons.css';
import './assets/controls.css';
import './assets/header.css';
import './assets/navigation.css';
import './assets/main.css';
import './assets/footer.css';

import App from './components/App';

import { store } from './redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
);
