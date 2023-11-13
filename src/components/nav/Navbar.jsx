// import React from 'react';
// import { BiHomeAlt2 } from "react-icons/bi";
// import { BsPerson, BsEye } from "react-icons/bs";
// import { RxEnvelopeClosed } from "react-icons/rx";
// import "./Navbar.css";
// import myImage from "../images/updated2.png";

// const Navbar = () => {
//   return (
//     <nav className="navbar">

//       <div className="image">
//         <img src={myImage} alt="Myself" width="100%" />
//       </div>

//       <ul className="nav">

//         <li className="link">
//           <a href="#home">
//             <BiHomeAlt2 size={50} className='icon' />
//             <div>HOME</div>
//           </a>
//         </li>

//         <li className="link">
//           <a href="#about">
//             <BsPerson size={50} className='icon' />
//             <div>ABOUT</div>
//           </a>
//         </li>

//         <li className="link">
//           <a href="#projects">
//             <BsEye size={50} className='icon' />
//             <div>PROJECTS</div>
//           </a>
//         </li>

//         <li className="link">
//           <a href="#contact">
//             <RxEnvelopeClosed size={50} className='icon' />
//             <div>CONTACT</div>
//           </a>
//         </li>

//       </ul>

//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { BiHomeAlt2 } from "react-icons/bi";
import { BsPerson, BsEye } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Link } from "react-scroll";
import "./Navbar.css";
import myImage from "../images/updated2.png";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="image">
        <img src={myImage} alt="Myself" width="100%" />
      </div>

      <ul className="nav">

        <li className="link">
          <Link to="home" smooth={true} duration={500}>
            <BiHomeAlt2 size={50} className='icon' />
            <div>HOME</div>
          </Link>
        </li>

        <li className="link">
          <Link to="about" smooth={true} duration={500}>
            <BsPerson size={50} className='icon' />
            <div>ABOUT</div>
          </Link>
        </li>

        <li className="link">
          <Link to="projects" smooth={true} duration={500}>
            <BsEye size={50} className='icon' />
            <div>PROJECTS</div>
          </Link>
        </li>

        <li className="link">
          <Link to="contact" smooth={true} duration={500}>
            <RxEnvelopeClosed size={50} className='icon' />
            <div>CONTACT</div>
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
