import React from "react";

// Import your icons
import python from "../assets/icons8-python-48.png";
import c from "../assets/icons8-c-50.png";
import javascript from "../assets/icons8-js-48.png";
import html from "../assets/icons8-html-48.png";
import css from "../assets/icons8-css-48.png";
import react from "../assets/icons8-react-50.png";
import nodejs from "../assets/icons8-node-js-48.png";
import github from "../assets/icons8-github-logo-96.png";
import mysql from "../assets/icons8-sql-48.png";
import postgresql from "../assets/icons8-postgresql-48.png";
import dsa from "../assets/icons8-data-structures-32.png";
import algorithm from "../assets/icons8-algorithms-64.png";
import oop from "../assets/icons8-object-oriented-programming-64.png";
import dbms from "../assets/icons8-dbms-64 (1).png";
import os from "../assets/icons8-operating-system-50.png";
import cn from "../assets/icons8-computer-network-48.png";
import express from "../assets/icons8-express-js-48.png";

// Define tech stack categories
const techCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: python },
      { name: "C", icon: c },
      { name: "JavaScript", icon: javascript },
    ],
  },
  {
    title: "Web Technologies",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "React JS", icon: react },
      { name: "Node JS", icon: nodejs },
      { name: "Express", icon: express },
      { name: "GitHub", icon: github },

    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
    ],
  },
  {
    title: "CS Fundamentals",
    items: [
      { name: "Data Structures", icon: dsa },
      { name: "Algorithms", icon: algorithm },
      { name: "OOP", icon: oop },
      { name: "DBMS", icon: dbms },
      { name: "OS", icon: os },
      { name: "CN", icon: cn },
    ],
  },
];

function Sec4() {
  return (
    <section className="techStackSection" id="techstack">
      <h1>
        Tech <span>Stack</span>
      </h1>
      {techCategories.map((category) => (
        <div key={category.title} className="techCategory">
          <h2>
            <code>{category.title}</code>
          </h2>
          <div className="skillsGrid">
            {category.items.map((skill) => (
              <div className="skillCard" key={skill.name}>
                <img src={skill.icon} alt={skill.name} className="skillIcon" />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Sec4;
