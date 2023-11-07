import React from 'react';
import "./Main.css";
import myImage from "../images/updated2.png";


const Main = () => {
  return (
    <>
      <div className="main">
        <h1>I'm Jason Morgan</h1>
        <p>Web Developer</p>
        <img src={myImage} alt="Myself" width="30%" />
      </div>
    </>
  )
}

export default Main;