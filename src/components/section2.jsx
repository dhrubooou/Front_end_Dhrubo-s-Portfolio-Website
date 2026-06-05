// put your image inside src/assets folder
import React from "react";
import Pic from '../assets/WhatsApp Image 2025-08-07 at 1.28.41 AM.jpeg';

function Sec2() {
    // Dynamically calculate months of experience since starting at BlueVector AI in Dec 2025
    const getExperienceMonths = () => {
        const startDate = new Date(2025, 11, 1); // December 1, 2025 (Month is 11 in JS Date)
        const currentDate = new Date();
        
        const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
        const monthsDiff = currentDate.getMonth() - startDate.getMonth();
        
        const totalMonths = (yearsDiff * 12) + monthsDiff;
        
        if (totalMonths < 1) {
            return "Fresher";
        } else if (totalMonths < 12) {
            return `${totalMonths}+ Mo`;
        } else {
            const years = Math.floor(totalMonths / 12);
            const remainingMonths = totalMonths % 12;
            if (remainingMonths === 0) {
                return `${years}+ Yr${years > 1 ? 's' : ''}`;
            }
            return `${years}Y ${remainingMonths}M+`;
        }
    };

    return (
        <section className="about section" id="about">
            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className="terminal-title">about_me.sh</span>
                </div>
                <div className="about-content">
                    <div className="about-image">
                        <div className="image-container-brackets">
                            <span className="bracket left-bracket">&#123;</span>
                            <img src={Pic} alt="Dhrubo's_Profile_picture" className="pfp" />
                            <span className="bracket right-bracket">&#125;</span>
                        </div>
                    </div>

                    <div className="about-text">
                        <h1>{"/* About Me */"}</h1>
                        <p>
                            I'm a Software Developer and B.Tech Computer Science graduate from <code className="code-highlight">UEM Kolkata (GPA: 8.54)</code>. Currently, I'm working as a <code className="code-highlight">Software Developer / Consultant at BlueVector AI</code>, resolving production defects, developing backend integrations, and optimizing core modules. With a <code className="code-highlight">5-star Python rating on HackerRank</code> and <code className="code-highlight">50+ LeetCode solutions</code>, I love building hands-on deep learning, full-stack, and voice automation apps. I was also a <code className="code-highlight">Top 3 Finalist in the Smart India Hackathon</code>!
                        </p>

                        <div className="skills">
                            <div className="skill">
                                <p>&gt; Python / Flask / Backend Development</p>
                                <div className="progress"><div style={{ width: "85%" }}></div></div>
                            </div>
                            <div className="skill">
                                <p>&gt; React / Node.js / Full-Stack</p>
                                <div className="progress"><div style={{ width: "80%" }}></div></div>
                            </div>
                            <div className="skill">
                                <p>&gt; DSA / Problem Solving</p>
                                <div className="progress"><div style={{ width: "76%" }}></div></div>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div>
                                <h3>{getExperienceMonths()}</h3>
                                <p>{"// Experience"}</p>
                            </div>
                            <div>
                                <h3>25+</h3>
                                <p>{"// Bugs Squashed"}</p>
                            </div>
                            <div>
                                <h3>50+</h3>
                                <p>{"// DSA Solved"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sec2;