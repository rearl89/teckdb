import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import App from './App';
import { Copper200ContextProvider } from './copper/context/Copper200Context';
import { Copper01ContextProvider } from './copper/context/Copper01Context';
import { Copper05ContextProvider } from './copper/context/Copper05Context';
import { CuChemXContextProvider } from './copper/context/CuChemXContext';
import { SnNexxContextProvider } from './tin/context/SnNexxContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Copper200ContextProvider>
    <Copper01ContextProvider>
      <Copper05ContextProvider>
        <CuChemXContextProvider>
          <SnNexxContextProvider>
            <App />
          </SnNexxContextProvider>
        </CuChemXContextProvider>
      </Copper05ContextProvider>
    </Copper01ContextProvider>
    </Copper200ContextProvider>
  </React.StrictMode>
);