import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import Curriculum from "./components/pages/Curriculum";
import Portfolio from "./components/pages/Portfolio"

import "./styles/Reset.css";
import "./styles/App.css";

import Navigation from "./components/navigation/Navbar";

function App() {
  return (
    <div className="cuerpo fondo">
      <div className="page">
        <Router>
          <header>
            <Navbar />
          </header>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/CV" component={Curriculum} />
            <Route path="/Portfolio" component={Portfolio} />
          </Switch>
          <footer>
            <p>Juanma Pérez © 2021</p>
          </footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
