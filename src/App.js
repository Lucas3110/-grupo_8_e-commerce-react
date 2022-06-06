import React from 'react';
import './App.css';
import Product from './components/Product';
import Last from './components/Last';
import Collection from './components/Collection';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Product />
          <div className='low-container'>
            <User />
            <Collection />
            <Last />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
