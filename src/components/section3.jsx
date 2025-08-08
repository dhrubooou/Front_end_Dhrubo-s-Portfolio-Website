import React from "react";

const projects = [
  {
    title: "Jaison Voice Assistant",
    description: "AI voice assistant with gesture control, file operations & web automation.",
    github: "https://github.com/dhrubojyoti73/Jaison-Voice-Assistant",
  },
  {
    title: "AI Traffic Detector",
    description: "Real-time traffic analysis using computer vision to detect vehicle movements.",
    github: "https://github.com/dhrubojyoti73/AI-Traffic-Detector",
  },
  {
    title: "News Feed Website",
    description: "Dynamic news site fetching live articles via APIs in real-time.",
    github: "https://github.com/dhrubojyoti73/Real-Time-News-Site",
  },
  {
    title: "Portfolio Website",
    description: "My personal responsive portfolio built using React and Node.js.",
    github: "https://github.com/dhrubojyoti73/Portfolio-Website",
  },
];

function Sec3() {
  return (
    <section className="projectsSection" id="projects">
      <h1>Projects</h1>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a className="githubLink" href={project.github} target="_blank" rel="noreferrer">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="git"/>
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sec3;
