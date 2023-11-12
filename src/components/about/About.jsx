import React from 'react';
import "./About.css";
import SkillsGrid from '../skills/SkillsGrid';

const About = () => {
  return (
    <div className='about' id="about">
        <h1 className="aboutName">Jason Morgan</h1>
        <div className="divider"></div>
        <p className="aboutMe">Certified Full-Stack Web Developer with 1.5 years experience designing, constructing, and debugging responsive web applications. Experienced in a teamwork environment, using creative problem solving and goal driven communication. Specializing in logic and functionality with Node.js & JavaScript. Enthusiastic about finding a position to learn and grow in an energetic team.</p>
        <h2 className="aboutName skills">My Skills</h2>
        <div className="divider"></div>
        <SkillsGrid />
    </div>
  )
}

export default About