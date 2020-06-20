import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
      </header>
      <section>
        <h2>
          Menu
        </h2>
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Menu item
        </a>
      </section>
    </div>
  );
}

export default App;
