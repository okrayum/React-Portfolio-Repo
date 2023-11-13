import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaRegPaperPlane } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  const formRef = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;

    // Use a simple regex pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is valid before submitting the form
    if (isValidEmail) {
      try {
        const response = await emailjs.sendForm(
          'service_202b9kd',
          'contact_form',
          e.target,
          'Ubq4JpNUBULRGXDiP'
        );

        console.log('Email sent successfully:', response.text);
        // Reset the form after successful submission
        formRef.current.reset();
      } catch (error) {
        console.error('Error sending email:', error.text);
      }
    } else {
      console.log('Invalid email. Please enter a valid email address.');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          required
        />
        {!isValidEmail && <p className="error-message">Please enter a valid email address.</p>}
      </div>

      <div>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" required />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <input type="text" id="message" name="message" placeholder="Message" required />
      </div>

      <button type="submit">
        <FaRegPaperPlane /> SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;