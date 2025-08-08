import React from "react";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo left permanent-marker-regular" style={{fontFamily:"UnifrakturMaguntia"}}><code>Dhrubojyoti's Portfolio</code></div>
      <div className="right">
        <ul>
            <li style={{ fontSize:20 }}><a href="#home">Home</a></li>
            <li style={{ fontSize:20 }}><a href="#about">About</a></li>
            <li style={{ fontSize:20 }}><a href="#projects">Projects</a></li>
            <li style={{ fontSize:20 }}><a href="#techstack">Tech Stack</a></li>
            <li style={{ fontSize:20 }}><a href="#contactme">Contact Me</a></li>


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;