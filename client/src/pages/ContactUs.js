// ContactUs.js

import React from 'react';
import './ContactUs.css'; // Import the CSS file for Contact Us styles

const ContactUs = () => {
  return (
    <div className="your-page1">
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        For any inquiries or to get in touch with us, please feel free to contact us
        via email or phone. We value your feedback and are here to assist you.
      </p>
      <div className="contact-details">
        <h2>Reach Out to Us</h2>
        
        <p>Email: <a href="mailto:info@blogblitz.com" className="email-link">info@blogblitz.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="phone-link">+1 (234) 567-890</a></p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <h3><a href="mailto:saiyamjain11@gmail.com" className="email-link">SAIYAM</a> : For Any Admin Related Issues Or Website Suggestions. </h3>
        <h3><a href="mailto:shreyadassom@gmail.com" className="email-link">SHREYA</a> : For Bussiness Related Queries And Collaborations.</h3>
        <h3><a href="mailto:tripathi.aryan80@gmail.com" className="email-link">ARYAN</a> : For Complaints Or Issues Faced Due To Other Users. </h3>
        <h3><a href="mailto:singhayush1803@gmail.com" className="email-link">AYUSH</a> : For Any Issues Related To Content Or Blogs.</h3>
        <h3><a href="mailto:rahul.rathi2021@vitstudent.ac.in" className="email-link">RAHUL</a> : For Other Queries Or Payment Issues.</h3>
      </div>
      <p>
        Whether you have questions, suggestions, or just want to say hello, we look
        forward to hearing from you!
      </p>
    </div>
    </div>
  );
};

export default ContactUs;
