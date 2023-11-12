import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import "./SocialIcons.css"


const SocialIcons = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/jason-morgan-907033b2';
  const githubUrl = 'https://github.com/okrayum';
  return (
    <div className="socialIcons">
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
      <CiLinkedin size={40} className='phoneIcon' />
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <FiGithub size={40} className='envelopeIcon' />
      </a>
    </div>
  )
}

export default SocialIcons