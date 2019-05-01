import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
<div className="container-fluid bg-white border border-secondary">
    <nav className="navbar-collapse">
        <div className="row">
            <div className="col-md-9">
    
                <ul className="nav">

                    <li className="nav-item bg-primary">
                            <Link to="/" className="nav-link text-light link">Benj Thomsen</Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-3">
    
                <ul className="nav">

                    <li className="nav-item">
                            <Link to="/" className="nav-link text-secondary link">About</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="/portfolio" className="nav-link text-secondary link">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="/contact" className="nav-link text-secondary link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
  );
};

export default Navbar;