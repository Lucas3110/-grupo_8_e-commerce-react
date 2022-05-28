import React from 'react';
import './App.css';
import Product from './components/Product';
import Total from './components/LastProduct';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <Product />
        <User />
        <Total />
        </main>        
      </header>
    </div>
  );
}

export default App;
