import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Student Name</h1>
                <p>123 Main Street, Anytown USA, 12345 | (123) 456-7890 | studentname@email.com</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science in Computer Science</h3>
                    <p>University of XYZ, Anytown USA | May 2023</p>
                    <p>GPA: 3.9/4.0</p>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p>University of ABC, Anytown USA | May 2021</p>
                    <p>GPA: 3.7/4.0</p>
                </div>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    <li>Programming languages: Java, Python, JavaScript, C++</li>
                    <li>Frameworks and libraries: React, Spring Boot, Django, Node.js, Express.js</li>
                    <li>Database systems: MySQL, MongoDB</li>
                    <li>Operating systems: Windows, linux</li>
                    <li>Version control: Git</li>
                </div>
            </section>

            <section className="section">
                <h2>Work Experience</h2>
                <div className="experience">
                    <h3>Software Development Intern</h3>
                    <ul>XYZ Corporation, Anytown USA | May 2022 - August 2022</ul>
                    <ul>Worked on a team to develop a new web application using React and Node.js</ul>
                    <ul>Collaborated with team members to design and implement features</ul>
                    <ul>Debugged and fixed issues in the codebase</ul>
                    <h3>Teaching Assistant</h3>
                    <ul>Department of Computer Science, University of XYZ | August 2021 - Present</ul>
                    <ul>Assist with grading and holding office hours for an undergraduate computer science course</ul>
                    <ul>Help students with assignments and answer questions about course material</ul>
                    <p>GPA: 3.7/4.0</p>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Website</h3>
                    <p>
                        Built a personal website using React and deployed it on GitHub Pages
                    </p>
                    <p>
                        Source code:{" "}
                        <a
                            href="https://github.com/studentname/personal-website"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        https://github.com/studentname/personal-website
                        </a>
                    </p>

                    <h3>Online Bookstore</h3>
                    <p>
                        Developed a web application for an online bookstore using Spring Boot and MySql
                    </p>
                    <p>
                        Source code:{" "}
                        <a
                            href="https://github.com/studentname/online-bookstore"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        https://github.com/studentname/online-bookstore
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;