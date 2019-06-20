import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import projects from "./projects.json";
import './App.css';

const App = () => (
  <BrowserRouter>
      <Navbar className="navbar sticky-top"></Navbar>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          {projects.map((project, index) => (
            <Route exact path={`/portfolio/${project.url}`} component={() => <Details project={project}/>}  key={index}/>
          ))}
        </div>
      <Footer className="navbar sticky-bottom"/>
  </BrowserRouter>
);

export default App;
