import React from "react";
import Typed from "typed.js";
import resume from "../assets/icons8-resume-96.png";
import linkedin from "../assets/icons8-linkedin-96.png";
import github from "../assets/icons8-github-logo-96.png";
import Pic from '../assets/Gemini_Generated_Image_g991peg991peg991 (1).jpg';

function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-Stack Developer.", "Python Enthusiast.", "Software Developer.", "Problem Solver."],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}

function Sec() {
  return (
    <section className="firstSection" id="home">
      <div className="leftSection">
        <p className="code-comment">{"// Welcome to my portfolio terminal"}</p>
        <p className="terminal-prompt"><span className="prompt-symbol">~$</span> cat welcome.sh</p>
        <p>
          Hi, my name is{" "}
          <span className="purple">Dhrubojyoti Bhattacharjee</span>
          <br />
          and I am a Passionate <br/><code className="purple"><MyComponent /></code>
        </p>

        <div className="profile-buttons">
          <a
            href="https://drive.google.com/file/d/1wrz0SHlxtZLn7dvOzQqwGNHiQ8aaGjUR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn border-only"
          >
            <img src={resume} alt="Resume" />
            My Resume
          </a>

          <a
            href="https://github.com/dhrubooou"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn border-only"
          >
            <img src={github} alt="GitHub" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dhrubojyoti007/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn border-only"
          >
            <img src={linkedin} alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="rightSection">
        <div className="orbitContainer">
          <span className="bracket left-bracket">&#123;</span>
          <img
            src={Pic}
            alt="Dhrubojyoti Bhattacharjee"
            className="pfp"
          />
          <span className="bracket right-bracket">&#125;</span>
        </div>
      </div>
    </section>
  );
}

export default Sec;
