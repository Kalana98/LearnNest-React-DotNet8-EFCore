import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries, feedback, or support. We're here to help!</p>
      </div>
      <div className="contact-us-form-container">
        <form className="contact-us-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type='text' id="message" name="message" rows="5" placeholder="Type your message here..." required /> 
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
