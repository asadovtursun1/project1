import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './pages/Header'
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Footer from './pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
    <Page8 />
    <Footer />
  </React.StrictMode>
);

