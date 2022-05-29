import React from 'react';
import './App.css';
import Product from './components/Product';
import Collection from './components/Collection';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <Product />
        <User />
        <Collection />
        </main>        
      </header>
    </div>
  );
}

export default App;
