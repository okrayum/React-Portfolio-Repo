import React from 'react';
import "./Navbar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsPerson, BsEye } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import myImage from "../images/updated2.png";

const Navbar = () => {
  return (
    <>

      <nav className="navbar">

        <div className="image">
          <img src={myImage} alt="Myself" width="100%" />
        </div>

        <ul className="nav">

          <li className="link">
            <a href="#home">
              <BiHomeAlt2 size={50} className='icon' />
              <div>HOME</div>
            </a>
          </li>

          <li className="link">
            <a href="#about">
              <BsPerson size={50} className='icon' />
              <div>ABOUT</div>
            </a>
          </li>

          <li className="link">
            <a href="#projects">
              <BsEye size={50} className='icon' />
              <div>PROJECTS</div>
            </a>
          </li>

          <li className="link">
            <a href="#contact">
              <RxEnvelopeClosed size={50} className='icon' />
              <div>CONTACT</div>
            </a>
          </li>

        </ul>

      </nav>

    </>
  );
}

export default Navbar;