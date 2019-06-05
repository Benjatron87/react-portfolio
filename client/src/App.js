import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import FlappyDisc from "./components/pages/FlappyDisc/FlappyDisc";
import './App.css';

const App = () => (
  <Router>
      <Navbar className="navbar sticky-top"></Navbar>
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/flappy-disc" component={FlappyDisc} />
    </div>
      <Footer className="navbar sticky-bottom"/>
  </Router>
);

export default App;
