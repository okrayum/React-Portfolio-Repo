import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaGoogle, FaCode, FaServer } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiJira } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'

const SkillsGrid = () => {
  return (
    <div className="grid-container">
      <div data-tooltip-id="html5" data-tooltip-content="HTML5"  className="grid-item">
        <FaHtml5 size={100} />
        <Tooltip id="html5" />
      </div>

      <div data-tooltip-id="css3" data-tooltip-content="CSS3" className="grid-item">
        <FaCss3 size={100} />
        <Tooltip id="css3" />

      </div>

      <div data-tooltip-id="js" data-tooltip-content="JavaScript" className="grid-item">
        <FaJs size={100} />
        <Tooltip id="js" />
      </div>

      <div data-tooltip-id="react" data-tooltip-content="React"  className="grid-item">
        <FaReact size={100} />
        <Tooltip id="react" />
      </div>

      <div data-tooltip-id="node.js" data-tooltip-content="Node.js"  className="grid-item">
        <FaNodeJs size={100} />
        <Tooltip id="node.js" />
      </div>

      <div data-tooltip-id="database" data-tooltip-content="Database" className="grid-item">
        <FaDatabase size={100} />
        <Tooltip id="database" />
      </div>

      <div data-tooltip-id="github" data-tooltip-content="GitHub"  className="grid-item">
        <FaGithub size={100} />
        <Tooltip id="github" />
      </div>

      <div data-tooltip-id="google" data-tooltip-content="Google"  className="grid-item">
        <FaGoogle size={100} />
        <Tooltip id="google" />
      </div>

      <div data-tooltip-id="code" data-tooltip-content="Code"  className="grid-item">
        <FaCode size={100} />
        <Tooltip id="code" />
      </div>

      <div data-tooltip-id="mongodb" data-tooltip-content="MongoDB" className="grid-item">
        <BiLogoMongodb size={100} />
        <Tooltip id="mongodb" />
      </div>

      <div data-tooltip-id="server" data-tooltip-content="Server" className="grid-item">
        <FaServer size={100} />
        <Tooltip id="server" />
      </div>

      <div data-tooltip-id="jira" data-tooltip-content="Jira"  className="grid-item">
        <SiJira size={100} />
        <Tooltip id="jira" />
      </div>
    </div>
  );
};

export default SkillsGrid;
