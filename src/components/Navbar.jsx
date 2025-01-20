import React, { useState } from "react";
import "./Style.css"; 

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container ">
    <nav className="navbar text-white bg-black">
      <div className="navbar-logo">MyLogo</div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
        <span className="menu-icon">&#9776;</span> {/* Hamburger Icon */}
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
