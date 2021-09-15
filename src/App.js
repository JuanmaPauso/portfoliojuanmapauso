import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import Curriculum from "./components/pages/Curriculum";
import Portfolio from "./components/pages/Portfolio"
import Widget from "./components/pages/ux-ui/Widget";
import LandingPage from "./components/pages/ux-ui/LandingPage";
import Games from "./components/pages/ux-ui/Games";
import page404 from "./components/pages/page404";

import "./styles/Reset.css";
import "./styles/App.css";
import Fitness from "./components/pages/photography/Fitness";

function App() {
  return (
    <div className="cuerpo">
      
        <Router>
          <header>
            <Navbar/>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/CV" component={Curriculum} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Widget" component={Widget} /> 
            <Route path="/LandingPage" component={LandingPage} />
            <Route path="/Games" component={Games} />
            <Route path="/Fitness" component={Fitness} />
            <Route path="*" component={page404} />
          </Switch>
          <footer>
            <p>Juanma Pérez © 2021</p>
          </footer>
        </Router>
        
     
    </div>
  );
}

export default App;
