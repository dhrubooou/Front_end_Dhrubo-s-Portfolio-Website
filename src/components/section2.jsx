// put your image inside src/assets folder
import React from "react";
import Pic from '../assets/WhatsApp Image 2025-08-07 at 1.28.41 AM.jpeg';

function Sec2() {
    return (
        <section className="about section" id="about">

            <div className="about-content">
                <div className="about-image">
                    <img src={Pic} alt="Dhrubo's_Profile_picture" className="pfp" />
                </div>

                <div className="about-text">
                    <h1>About <span>Me</span></h1>
                    <p>
                        I'm a final-year Computer Science student with a strong grasp of  <code style={{ color:"rgb(221, 112, 213)" }}>Data structures, Algorithms, and Full-stack development</code> .<br></br> I’ve built AI-powered apps, a gesture-controlled voice assistant, and solved 50+ DSA problems on <code style={{ color:"rgb(221, 112, 213)" }}>LeetCode</code>. I thrive on building real-world tech, collaborating on impactful projects, and pushing ideas from code to creation.
                    </p>

                    <div className="skills">
                        <div className="skill">
                            <p>Web Development</p>
                            <div className="progress"><div style={{ width: "56%" }}></div></div>
                        </div>
                        <div className="skill">
                            <p>Software Engineering</p>
                            <div className="progress"><div style={{ width: "55%" }}></div></div>
                        </div>
                        <div className="skill">
                            <p>Problem Solving</p>
                            <div className="progress"><div style={{ width: "76%" }}></div></div>
                        </div>

                    </div>

                    <div className="about-stats">
                        <div>
                            <h3>Fresher</h3>
                            <p >Years of Experience</p>
                        </div>
                        <div>
                            <h3>4+</h3>
                            <p>Projects Completed</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}



export default Sec2;