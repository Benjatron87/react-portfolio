import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
      <div className="container-fluid navbar sticky-top">
            
            <div className="nav-item name">
                    <Link to="/" className="nav-link name link">Benj Thomsen</Link>
            </div>

            <div className="nav page-links d-flex justify-content-center">

                <div className="nav-item navLink">
                        <Link to="/" className="nav-link navLink link">About</Link>
                </div>
                <div className="nav-item navLink">
                        <Link to="/portfolio" className="nav-link navLink link">Portfolio</Link>
                </div>
                <div className="nav-item navLink">
                        <Link to="/contact" className="nav-link navLink link">Contact</Link>
                </div>
            </div>
      </div>
  );
};

export default Navbar;