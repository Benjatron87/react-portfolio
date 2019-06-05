import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
<div className="container-fluid navbar sticky-top">
            <div className="benj">
    
                <ul className="nav">

                    <li className="nav-item name">
                            <Link to="/" className="nav-link text-light link">Benj Thomsen</Link>
                    </li>
                </ul>
            </div>

            <div className="page-links">
    
                <ul className="nav">

                    <li className="nav-item">
                            <Link to="/" className="nav-link navLink link">About</Link>
                    </li>
                    <li className="nav-item navLink">
                            <Link to="/portfolio" className="nav-link navLink link">Portfolio</Link>
                    </li>
                    <li className="nav-item navLink">
                            <Link to="/contact" className="nav-link navLink link">Contact</Link>
                    </li>
                </ul>
            </div>
</div>
  );
};

export default Navbar;