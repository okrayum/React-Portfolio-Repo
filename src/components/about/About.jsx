import React from 'react';
import "./About.css";
import SkillsGrid from '../skills/SkillsGrid';

const About = () => {
  return (
    <div className='about' id="about">
        <h1 className="aboutName">Jason Morgan</h1>
        <div className="divider"></div>
        <p className="aboutMe">Certified Full-Stack Web Developer with a strong foundation in designing, constructing, and debugging responsive web applications. My proficiency in HTML5, CSS, JavaScript, and React is coupled with a deep passion for creative problem-solving and effective team communication. I thrive in dynamic, goal-driven team settings and am eager to contribute to projects that push the boundaries of what's possible in the digital realm. Let's build something extraordinary together!</p>
        <h2 className="aboutName skills">My Skills</h2>
        <div className="divider"></div>
        <SkillsGrid />
    </div>
  )
}

export default About