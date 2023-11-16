import React from 'react';
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import MyFooter from '../footer/Footer';
import "./SocialIcons.css"


const SocialIcons = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/jason-morgan-907033b2';
  const githubUrl = 'https://github.com/okrayum';
  return (
    <>
      <div className="socialIcons">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className='envelopeIcon' />
        </a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <ImLinkedin size={40} className='phoneIcon' />
        </a>
      </div>
      <MyFooter />
    </>
  )
}

export default SocialIcons