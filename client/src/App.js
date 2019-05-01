import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
      <Navbar/>
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
