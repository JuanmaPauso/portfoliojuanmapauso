import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Curriculum from "./components/pages/Curriculum";
import Portfolio from "./components/pages/Portfolio"
import Widget from "./components/pages/ux-ui/Widget";
import LandingPage from "./components/pages/ux-ui/LandingPage";

function Enlaces() {
    return (
        <Router>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/CV" component={Curriculum} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Widget" component={Widget} /> 
            <Route path="/LandingPage" component={LandingPage} /> 
          </Switch>
        </Router>  
    )
}

export default Enlaces