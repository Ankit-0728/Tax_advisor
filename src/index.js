import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/bootstrap.css';
import './assets/font-awesome.css';
import './assets/ionicon.css';
import './assets/royal-preload.css';
import './assets/slick.css';
// import './assets/slick-theme.css';
// import './assets/slick-theme.css'
import './style.css';
import './revolution/css/settings.css';
import './revolution/css/layers.css';
import './revolution/css/navigation.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
