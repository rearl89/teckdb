import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import App from './App';
import { Copper01ContextProvider } from './context/Copper01Context';
import { SnNexxContextProvider } from './context/SnNexxContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Copper01ContextProvider>
      <SnNexxContextProvider>
      <App />
      </SnNexxContextProvider>
    </Copper01ContextProvider>
  </React.StrictMode>
);
