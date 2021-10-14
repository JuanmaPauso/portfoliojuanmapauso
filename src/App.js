import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      
        <Router forceRefresh={true} >
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
            <Route strict path="/Widget" component={Widget} /> 
            <Route strict path="/LandingPage" component={LandingPage} />
            <Route strict path="/Games" component={Games} />
            <Route strict path="/Watch" component={Watch} />
            {/* Fotografía */}
            <Route strict path="/Fitness" component={Fitness} />
            {/* Audiovisuales */}
            <Route strict path="/Recetas" component={Recetas} />
            {/* Diseño Gráfico */}
            <Route strict path="/MWC" component={MWC} />
            <Route strict path="/Guia" component={Guia} />
            {/* Ilustracion */}
            <Route strict path="/Icons" component={Icons } />
            {/* Page 404 */}
            <Route strict path="*" component={page404} />
          </Switch>
         
          <Footer/>
      
        </Router>
        
     
    </div>
  );
}

export default App;
