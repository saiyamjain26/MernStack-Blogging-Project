import React from "react";
import "./footer.css";
import { RiFontColor } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="desktop-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Consumer</h3>
          <ul>
            <li>
            <Link to="/pricing" className="subfot">Pricing</Link>
            </li>
            <li>
            <Link to="/customer" className="subfot">Customer</Link>
            </li>
            <li>
            <Link to="/reviews" className="subfot">Reviews</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>
            <Link to="/ourstory" className="subfot">Our Story</Link>
            </li>
            <li>
            <Link to="/ourteam" className="subfot">Our Team</Link>
            </li>
            <li>
            <Link to="/ourmission" className="subfot">Our Mission</Link>
            </li>
            <li>
            <Link to="/ourvision" className="subfot">Our Vision</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>License</h3>
          <ul>
            <li>
            <Link to="/termsandconditions" className="subfot">Terms And Conditions</Link>
            </li>
            <li>
            <Link to="/privacysecurity" className="subfot">Privacy And Security</Link>
            </li>
            <li>
            <Link to="/faqs" className="subfot">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul>
            <li>
            <Link to="/instagram" className="subfot">Instagram</Link>
            </li>
            <li>
            <Link to="/linkedin" className="subfot">Linkedin</Link>
            </li>
            <li>
            <Link to="/contactus" className="subfot">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-info">
        <p>
          @ Mady By Saiyam,Shreya,Aryan,Ayush,Rahul
        </p>
        <p>
        <p>For any issues, kindly send an email to <a href="mailto:saiyamjain11@gmail.com" class="email-link">saiyamjain11@gmail.com</a>.</p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
