import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Copper01ContextProvider } from './context/Copper01Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Copper01ContextProvider>
      <App />
    </Copper01ContextProvider>
  </React.StrictMode>
);
