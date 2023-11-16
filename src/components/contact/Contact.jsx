import React from 'react';
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { RxEnvelopeClosed } from "react-icons/rx";
import ContactForm from '../contactForm/ContactForm';
import SocialIcons from '../social/SocialIcons';
// import MyFooter from '../footer/Footer';
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">

      <h1 className="aboutName">Contact Me</h1>
      <div className="divider"></div>

      <div className="contactDetails">
        <p><GoLocation size={35} className='locationIcon' /> Phoenix, US</p>

        <p><AiOutlinePhone size={35} className='phoneIcon' /> Phone: 480-420-6149</p>
        
        <p><RxEnvelopeClosed size={35} className='envelopeIcon' /> Email: morgannj71@gmail.com</p>
      </div>

      <p className="aboutMe aboutContact">Let's get in touch. Send me a message:</p>

      <ContactForm />
      <SocialIcons />
      {/* <MyFooter /> */}


    </div>
  )
}

export default Contact
