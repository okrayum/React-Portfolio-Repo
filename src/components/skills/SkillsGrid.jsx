import React from 'react';
import "./Skills.css";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaGoogle, FaCode, FaServer } from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { SiJira } from "react-icons/si";


const SkillsGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item"><FaHtml5 size={100} /></div>
      <div className="grid-item"><FaCss3 size={100} /></div>
      <div className="grid-item"><FaJs size={100} /></div>
      <div className="grid-item"><FaReact size={100} /></div>
      <div className="grid-item"><FaNodeJs size={100} /></div>
      <div className="grid-item"><FaDatabase size={100} /></div>
      <div className="grid-item"><FaGithub size={100} /></div>
      <div className="grid-item"><FaGoogle size={100} /></div>
      <div className="grid-item"><FaCode size={100} /></div>
      <div className="grid-item"><BiLogoMongodb size={100} /></div>
      <div className="grid-item"><FaServer size={100} /></div>
      <div className="grid-item"><SiJira size={100} /></div>
    </div>
  )
}

export default SkillsGrid;