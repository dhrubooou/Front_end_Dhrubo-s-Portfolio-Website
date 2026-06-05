import React from "react";

function Education() {
  return (
    <section className="educationSection" id="education">
      <h1>{"/* Education */"}</h1>
      <div className="education-container-relative">
        
        {/* Ambient Floating Education Tags */}
        <div className="floating-tech-tag tag-algorithms">Algorithms</div>
        <div className="floating-tech-tag tag-dsa">Data Structures</div>
        <div className="floating-tech-tag tag-dbms">DBMS</div>
        <div className="floating-tech-tag tag-networks">Networks</div>
        <div className="floating-tech-tag tag-os">OS</div>
        <div className="floating-tech-tag tag-oop">OOP</div>

        <div className="terminal-window education-standalone-window">
          <div className="terminal-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="terminal-title">education.sh</span>
          </div>
          <div className="terminal-body card-terminal-body">
            <p className="terminal-prompt">
              <span className="prompt-symbol">~$</span> ./education.sh --credentials
            </p>
            <div className="experience-detail">
              <h3>&gt; Bachelor of Technology in Computer Science</h3>
              <p className="experience-meta">{"// University of Engineering & Management, Kolkata (Aug 2021 - Aug 2025)"}</p>
              <p className="experience-location">{"// GPA: 8.54 / 10.00 | Kolkata, India"}</p>
              <ul className="terminal-bullet-points">
                <li>Acquired high proficiency in <strong>Data Structures and Algorithms, DBMS, Computer Networking, Operating Systems, and OOP</strong>.</li>
                <li>Earned <strong>5-star Python coder</strong> status on HackerRank.</li>
                <li>Solved <strong>50+ DSA challenges</strong> on LeetCode.</li>
                <li>Successfully reached national finals in the prestigious <strong>Smart India Hackathon 2023</strong> (Top 3) and <strong>HackSpire 2024</strong>.</li>
              </ul>
              <div className="card-tech-tags-list">
                <code>Algorithms</code>
                <code>Data Structures</code>
                <code>DBMS</code>
                <code>Networks</code>
                <code>OS</code>
                <code>OOP</code>
              </div>

              <h3 style={{ marginTop: "25px" }}>&gt; High School Senior Secondary Education (Class 12 CBSE)</h3>
              <p className="experience-meta">{"// B.D.M. International (Completed July 2021)"}</p>
              <p className="experience-location">{"// Percentage: 82% Science Stream | Kolkata, India"}</p>
              <ul className="terminal-bullet-points">
                <li>Completed secondary CBSE education in high-level sciences with **82% score** (with Computer Science stream).</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;