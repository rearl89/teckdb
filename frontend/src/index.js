import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import App from './App';
import { Copper200ContextProvider } from './copper/context/Copper200Context';
import { Cu200PureContextProvider } from './copper/context/Cu200PureContext';
import { Copper01ContextProvider } from './copper/context/Copper01Context';
import { Copper05ContextProvider } from './copper/context/Copper05Context';
import { Copper09ContextProvider } from './copper/context/Copper09Context';
import { Copper09DHContextProvider } from './copper/context/Copper09DHContext';
import { CuChemXContextProvider } from './copper/context/CuChemXContext';
import { CuEbaraContextProvider } from './copper/context/CuEbaraContext';
import { SnNexxContextProvider } from './tin/context/SnNexxContext';
import { WedgesContextProvider } from './tin/context/WedgesContext';
import { Ni200ContextProvider } from './nickel/context/Ni200Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Define an array of context providers
const contextProviders = [
  Copper200ContextProvider,
  Cu200PureContextProvider,
  Copper01ContextProvider,
  Copper05ContextProvider,
  Copper09ContextProvider,
  Copper09DHContextProvider,
  CuChemXContextProvider,
  CuEbaraContextProvider,
  SnNexxContextProvider,
  WedgesContextProvider,
  Ni200ContextProvider
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
