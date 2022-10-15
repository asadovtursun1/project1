import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './pages/Header'
import Page2 from './pages/page2';
import Page3 from './pages/page3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Page2 />
    <Page3 />
  </React.StrictMode>
);

