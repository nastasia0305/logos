import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './css/null.css'
import './css/header.css'
import './components/FeedBack/feedback.css'
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

