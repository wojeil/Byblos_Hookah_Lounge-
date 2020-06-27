import React from "react";
import "./Navbar.css";


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand"  target="_blank" href="https://www.facebook.com/bybloshookah/">Byblos Hookah Lounge</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#events">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#menu">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;