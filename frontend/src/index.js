import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AnodeContextProvider } from './context/AnodeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnodeContextProvider>
      <App />
    </AnodeContextProvider>
  </React.StrictMode>
);
