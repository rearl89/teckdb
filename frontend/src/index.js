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

// Define an array of context providers
const contextProviders = [
  Copper200ContextProvider,
  Copper01ContextProvider,
  Copper05ContextProvider,
  CuChemXContextProvider,
  SnNexxContextProvider
];

// Create a function to wrap the App component with each context provider
const wrapWithProviders = (Component) => {
  return contextProviders.reduceRight((WrappedComponent, ContextProvider) => {
    return <ContextProvider>{WrappedComponent}</ContextProvider>;
  }, <Component />);
};

root.render(
  <React.StrictMode>
    {wrapWithProviders(App)}
  </React.StrictMode>
);
