import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaRegPaperPlane } from 'react-icons/fa';
import './ContactForm.css';

// EmailJS credentials come from environment variables (see .env.example).
// Hardcoded values below are fallbacks so the deployed site keeps working.
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_202b9kd';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'contact_form';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'Ubq4JpNUBULRGXDiP';

const ContactForm = () => {
  const formRef = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;

    // Use a simple regex pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is valid before submitting the form
    if (!isValidEmail) {
      return;
    }

    setStatus('sending');
    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', response.text);
      // Reset the form after successful submission
      formRef.current.reset();
      setStatus('sent');
    } catch (error) {
      console.error('Error sending email:', error.text);
      setStatus('error');
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
        <textarea rows={3} type="text" id="message" name="message" placeholder="Message" required />
      </div>

      <button type="submit" disabled={status === 'sending'}>
        <FaRegPaperPlane /> {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
      </button>

      {status === 'sent' && (
        <p className="form-status success" role="status">
          Message sent! I'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="form-status error" role="alert">
          Something went wrong sending your message. Please try again or email
          me directly at jasonmorgan.dev@gmail.com.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
