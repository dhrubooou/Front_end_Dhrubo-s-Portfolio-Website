import React from "react";

function Experience() {
  return (
    <section className="experienceSection" id="experience">
      <h1>{"/* Professional Experience */"}</h1>
      <div className="experience-container-relative">
        
        {/* Ambient Floating Tech Tags */}
        <div className="floating-tech-tag tag-flask">Flask</div>
        <div className="floating-tech-tag tag-python">Python</div>
        <div className="floating-tech-tag tag-gcp">GCP</div>
        <div className="floating-tech-tag tag-jinja">Jinja2</div>
        <div className="floating-tech-tag tag-html">HTML</div>
        <div className="floating-tech-tag tag-css">CSS</div>
        <div className="floating-tech-tag tag-js">JavaScript</div>

        <div className="terminal-window experience-standalone-window">
          <div className="terminal-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="terminal-title">experience.sh</span>
          </div>
          <div className="terminal-body card-terminal-body">
            <p className="terminal-prompt">
              <span className="prompt-symbol">~$</span> ./experience.sh --active
            </p>
            <div className="experience-detail">
              <h3>&gt; Associate Cloud Consultant</h3>
              <p className="experience-meta">{"// BlueVector AI (Dec 2025 - Present)"}</p>
              <p className="experience-location">{"// Denver, CO / Remote"}</p>
              <ul className="terminal-bullet-points">
                <li>Resolved <strong>25+ production defects</strong>, reducing system issues by <strong>60%+</strong> and improving application stability.</li>
                <li>Developed and debugged applications using <strong>HTML, CSS, JavaScript, and Python</strong>, ensuring seamless UI/UX and reliable functionality on <strong>SNAPAPP</strong>.</li>
                <li>Built and optimized backend components using <strong>Flask</strong> and <strong>Jinja2</strong>, while working with <strong>SnapApp (Classic)</strong> to troubleshoot auto-generated applications.</li>
                <li>Revamped the <strong>Message Center feature</strong>, centralizing tracking of emails, SMS alerts, and system notifications.</li>
                <li>Gained hands-on exposure to <strong>Google Cloud Platform (GCP)</strong> for deployment, monitoring, and debugging, while improving code maintainability through refactoring and documentation.</li>
              </ul>
              <div className="card-tech-tags-list">
                <code>Flask</code>
                <code>Python</code>
                <code>GCP</code>
                <code>Jinja2</code>
                <code>HTML</code>
                <code>CSS</code>
                <code>JavaScript</code>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;