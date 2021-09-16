import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import page404 from "./components/page404";

import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Portfolio from "./pages/Portfolio"
import Widget from "./pages/ux-ui/Widget";
import LandingPage from "./pages/ux-ui/LandingPage";
import Games from "./pages/ux-ui/Games";
import Fitness from "./pages/photography/Fitness";
import Recetas from "./pages/Audiovisual/Recetas";
import Watch from "./pages/ux-ui/Watch";
import MWC from "./pages/graphicDesigner/MWC";
import Guia from "./pages/graphicDesigner/Guia";
import Icons from "./pages/illustrator/Icons";

import "./styles/Style.css"; 

function App() {
  return (
    <div className="cuerpo">
      
        <Router>
          <header>
            <Navbar/>
          </header>
          <Switch>
            {/* Páginas principales */}
            <Route path="/" exact component={Home} />
            <Route path="/CV" component={Curriculum} />
            <Route path="/Portfolio" component={Portfolio} />
            {/* Proyectos */}
            {/* UX-UI */}
            <Route path="/Widget" component={Widget} /> 
            <Route path="/LandingPage" component={LandingPage} />
            <Route path="/Games" component={Games} />
            <Route path="/Watch" component={Watch} />
            {/* Fotografía */}
            <Route path="/Fitness" component={Fitness} />
            {/* Audiovisuales */}
            <Route path="/Recetas" component={Recetas} />
            {/* Diseño Gráfico */}
            <Route path="/MWC" component={MWC} />
            <Route path="/Guia" component={Guia} />
            {/* Ilustracion */}
            <Route path="/Icons" component={Icons } />
            {/* Page 404 */}
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
