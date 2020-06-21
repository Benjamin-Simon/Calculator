import React from "react";
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import WallInsulation from "./components/wall-insulation/WallInsulation";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>Home</p>
        </header>
        <section className="menu-wrapper">
          <h2 className="menu-heading">Menu</h2>
          <nav className="menu-nav">
            <NavLink className="app-link" activeClassName="app-link__active" to="/home" rel="noopener noreferrer">
              Home
            </NavLink>
            <NavLink className="app-link" activeClassName="app-link__active" to="/wall-insulation" rel="noopener noreferrer">
              Wall Insulation
            </NavLink>
          </nav>
        </section>
        <section className="main-wrapper">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/wall-insulation"  render={() => <WallInsulation />} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
