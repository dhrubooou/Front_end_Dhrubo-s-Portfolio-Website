import React, { useState } from "react"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="logo left permanent-marker-regular"
        style={{ fontFamily: "UnifrakturMaguntia" }}
      >
        <code>Dhrubojyoti's Portfolio</code>
      </div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`right ${isOpen ? "open" : ""}`}>
        <ul>
          <li style={{ fontSize: 20 }}><a href="#home">Home</a></li>
          <li style={{ fontSize: 20 }}><a href="#about">About</a></li>
          <li style={{ fontSize: 20 }}><a href="#projects">Projects</a></li>
          <li style={{ fontSize: 20 }}><a href="#techstack">Tech Stack</a></li>
          <li style={{ fontSize: 20 }}><a href="#contactme">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
