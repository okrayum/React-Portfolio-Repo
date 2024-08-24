import React from 'react';
import "./Main.css";
import myImage from "../images/me2.png";


const Main = () => {
  return (
    <div id="home" className="main">
        <h1>I'm Jason Morgan</h1>
        <p>Software Engineer, Growth Mindset, Lifelong Learner</p>
        <img src={myImage} alt="Myself" />
    </div>
  )
}

export default Main;