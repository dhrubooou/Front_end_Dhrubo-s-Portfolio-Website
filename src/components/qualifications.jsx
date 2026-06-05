import React from "react";

function Qualifications() {
  return (
    <section className="qualificationsSection" id="qualifications">
      <h1>{"/* Hackathons & Certifications */"}</h1>
      <div className="qualificationsGrid">
        
        {/* Left Column: Stacked Hackathons (Upper & Down) */}
        <div className="hackathons-vertical-stack">
          
          {/* Card 1: Smart India Hackathon 2023 (Upper Part) */}
          <div className="terminal-window qualification-card">
            <div className="terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">sih_2023.py</span>
            </div>
            <div className="terminal-body card-terminal-body">
              <p className="terminal-prompt">
                <span className="prompt-symbol">~$</span> python3 sih_2023.py --run
              </p>
              <div className="experience-detail">
                <h3>&gt; Smart India Hackathon 2023 (Top 3)</h3>
                <p className="experience-meta">{"// National Finalist (Dec 2023)"}</p>
                <ul className="terminal-bullet-points">
                  <li>Programmed convolutional deep learning neural networks detecting buried persons under avalanche debris with <strong>90% accuracy</strong> from thermal vision datasets.</li>
                  <li>Represented University of Engineering & Management, Kolkata at national final stages.</li>
                </ul>
                <div className="card-tech-tags-list">
                  <code>PyTorch</code>
                  <code>Deep Learning</code>
                  <code>Thermal Imaging</code>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: HackSpire 2024 (Down Part) */}
          <div className="terminal-window qualification-card">
            <div className="terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">hackspire_2024.py</span>
            </div>
            <div className="terminal-body card-terminal-body">
              <p className="terminal-prompt">
                <span className="prompt-symbol">~$</span> python3 hackspire_2024.py --run
              </p>
              <div className="experience-detail">
                <h3>&gt; HackSpire 2024 (Finalist)</h3>
                <p className="experience-meta">{"// Web Developer (Sept 2024)"}</p>
                <ul className="terminal-bullet-points">
                  <li>Engineered centralized inventory coordination and supply chain systems, reducing overall product stockouts by <strong>25%</strong>.</li>
                  <li>Boosted general order fulfillment speeds by <strong>30%</strong> supporting 100+ active connections.</li>
                </ul>
                <div className="card-tech-tags-list">
                  <code>React</code>
                  <code>Node.JS</code>
                  <code>REST APIs</code>
                  <code>Databases</code>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Certifications */}
        <div className="terminal-window qualification-card certifications-card-window">
          <div className="terminal-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="terminal-title">certifications.env</span>
          </div>
          <div className="terminal-body card-terminal-body">
            <p className="terminal-prompt">
              <span className="prompt-symbol">~$</span> source ./env/certificates.sh && env
            </p>
            <div className="experience-detail env-vars-detail">
              <p><span className="env-var">DATA_STRUCTURES_UDEMY</span>=true</p>
              <p><span className="env-var">ALGORITHMS_ANALYSIS_UDEMY</span>=true</p>
              <p><span className="env-var">FULL_STACK_WEB_UDEMY</span>=true</p>
              <p><span className="env-var">DELOITTE_TECH_SIMULATION</span>=true</p>
              <p className="env-comment" style={{ marginTop: "15px" }}># Deloitte Tech Simulation via Forage</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Qualifications;