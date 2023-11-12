import React from 'react';
import PhotoSlider2 from '../photoSlider2/PhotoSlider2';
import "./Projects.css"

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="aboutName">My Projects</h1>
      <div className="divider"></div>
      <PhotoSlider2 />
    </div>
  )
}

export default Projects;