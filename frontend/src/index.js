import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import App from './App';
import { Copper01ContextProvider } from './copper/context/Copper01Context';
import { CuChemXContextProvider } from './copper/context/CuChemXContext';
import { SnNexxContextProvider } from './tin/context/SnNexxContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Copper01ContextProvider>
      <CuChemXContextProvider>
        <SnNexxContextProvider>
          <App />
        </SnNexxContextProvider>
      </CuChemXContextProvider>
    </Copper01ContextProvider>
  </React.StrictMode>
);