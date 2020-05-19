import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mail from "./email/index"
import store from "../src/ezpz/store"
import { StoreProvider } from 'easy-peasy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StoreProvider store={store}>
          <Mail/>          
        </StoreProvider>
      </header>
    </div>
  );
}

export default App;
