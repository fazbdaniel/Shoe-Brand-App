import React, { useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`container navigation ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <a href="#hero"><img src="/images/brand_logo.png" alt="logo" /></a>
      </div>
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#products">Products</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
      <button className="btn btn-primary">Login</button>
    </nav>
  );
};

export default Navigation;
