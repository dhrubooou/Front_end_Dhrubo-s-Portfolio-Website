import React from "react";
import Typed from 'typed.js';
import resume from "../assets/icons8-resume-96.png";
import linkedin from "../assets/icons8-linkedin-96.png";
import github from "../assets/icons8-github2.png";
function MyComponent() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer.', 'Software Engineer.'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {

      typed.destroy();
    };
  }, []);

  return (
    <span ref={el} />

  );
}

function Sec() {
  return (

    <section class="firstSection" id="home">
      <div class="leftSection">Hi , My name is <span class="purple"><code>Dhrubojyoti Bhattacharjee</code></span> <br />
        <div> and I am a Passionate </div>
        <div id="element"><code>{MyComponent()}</code></div>
        <div className="profile-buttons">
          <a href="https://drive.google.com/file/d/1wrz0SHlxtZLn7dvOzQqwGNHiQ8aaGjUR/view?usp=drive_link" target="_blank" rel="noopener noreferrer"  className="icon-btn border-only">
            <img src={ resume } alt="Resume" />
            My Resume
          </a>
          <a href="https://github.com/dhrubooou" target="_blank" rel="noopener noreferrer" className="icon-btn border-only">
            <img src={ github } alt="GitHub" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dhrubojyoti007/" target="_blank" rel="noopener noreferrer" className="icon-btn border-only">
            <img src={ linkedin } alt="LinkedIn" />
            LinkedIn
          </a>
        </div>

      </div>
      <div className="rightSection">
        <div className="orbitContainer">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQEt5eQZpuVItQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706942512495?e=1757548800&v=beta&t=woK3TZX7QZhGJFmifhEh3NJjokjLJwAMg1Zl2xAT2V8" alt="Dhrubo's_Profile_picture" className="pfp" />
        </div>
      </div>


    </section>

  );
}

export default Sec;
