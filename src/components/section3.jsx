import React from "react";
import githubIcon from "../assets/icons8-github2.png";

const projects = [
  {
    title: "Jaison Voice Assistant",
    description: "AI voice assistant with gesture control, file operations & web automation. Integrated Ollama LLM and Spotify API with 90% sentiment accuracy, enabling seamless hand gesture system triggers (+40% speed).",
    tech: ["Python", "OpenCV", "MediaPipe", "SpeechRecognition", "Ollama", "Twilio", "Spotify API"],
    github: "https://github.com/dhrubooou/AI-voice-assistant",
    filename: "jaison_voice.py"
  },
  {
    title: "AI Traffic Detector",
    description: "Real-time traffic flow analysis system using computer vision to detect, track, and categorize vehicle movements. Highly optimized image parsing loops ensure robust, low-latency live video telemetry feeds.",
    tech: ["Python", "OpenCV", "Computer Vision", "YOLO", "Image Processing"],
    github: "https://github.com/dhrubojyoti73/AI-Traffic-Detector",
    filename: "traffic_detector.py"
  },
  {
    title: "News Feed Website",
    description: "Dynamic news application fetching global articles in real-time via REST APIs. Implemented tiered caching layer and async request pipelines, reducing standard API request overhead by 30% and speeding load times.",
    tech: ["HTML", "CSS", "JavaScript", "News APIs", "Async/Await", "Caching"],
    github: "https://github.com/dhrubooou/Newsapp21",
    filename: "news_feed.js"
  },
  {
    title: "Portfolio Website",
    description: "Responsive developer portfolio styled as an interactive terminal console. Configured Node/Express contact endpoints, achieving 100% mobile view compatibility and drawing over 200+ active unique visitors in month 1.",
    tech: ["React", "Node.JS", "Express.JS", "Render", "GitHub Pages"],
    github: "https://github.com/dhrubooou/Front_end_Dhrubo-s-Portfolio-Website",
    filename: "portfolio.jsx"
  }
];

function Sec3() {
  return (
    <section className="projectsSection" id="projects">
      <h1>{"/* Projects */"}</h1>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div className="card-terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="card-terminal-title">{project.filename}</span>
            </div>
            <div className="card-body">
              <h3>~$ ./exec "{project.title}"</h3>
              <p>{project.description}</p>
              <div className="project-tech-badges">
                {project.tech.map((t, idx) => (
                  <code key={idx}>{t}</code>
                ))}
              </div>
              <a className="githubLink" href={project.github} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" className="git"/>
                git clone repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sec3;