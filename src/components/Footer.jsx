import React from "react";
import resume from "../assets/icons8-resume-96.png";
import linkedin from "../assets/icons8-linkedin-96.png";
import github from "../assets/icons8-github2.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Dhrubojyoti Bhattacharjee</p>
        <div className="footer-links">
          <a href="/Dhrubojyoti_Bhattacharjee_SDE_CV.pdf" download="Dhrubojyoti_Resume.pdf" title="Download Resume">
            <img src={resume} alt="Resume" />
          </a>
          <a href="https://github.com/dhrubooou" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/dhrubojyoti007/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}
