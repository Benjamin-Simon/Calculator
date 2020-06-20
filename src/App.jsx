import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import WallInsulation from "./components/wall-insulation/WallInsulation";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>Home</p>
        </header>
        <section className="menu-wrapper">
          <h2>Menu</h2>
          <nav className="menu-nav">
            <a className="app-link" href="/" rel="noopener noreferrer">
              Home
            </a>
            <a className="app-link" href="/wall-insulation" rel="noopener noreferrer">
              Wall Insulation
            </a>
          </nav>
        </section>
        <section className="main-wrapper">
          <Route path="/wall-insulation" component={WallInsulation} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
