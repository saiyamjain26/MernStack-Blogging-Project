import React, { useState } from 'react';
import './PrivacySecurity.css'; // Import the CSS file for Privacy and Security styles

const PrivacySecurity = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleSection = (id) => {
    scrollToSection(id);
    setActiveSection(id === activeSection ? null : id);
  };

  return (
    <div className="your-page9">
      <div className="privacy-security-container">
        <h1 onClick={() => toggleSection('privacy-security-title')}>Privacy and Security</h1>
        <div
          id="privacy-security-title"
          className={`privacy-security-content ${activeSection === 'privacy-security-title' ? 'active' : ''}`}
        >
          {/* Privacy and Security content */}
          <p>
            Your privacy and security are our top priorities. We are committed to protecting your information.
          </p>
          <p>
            At BlogBlitz, we take the following measures to ensure your privacy and security:
          </p>
          <ul>
            <li><strong>Data Encryption:</strong> We use advanced encryption techniques to secure your data during transmission.</li>
            <li><strong>Secure Servers:</strong> Our servers are hosted in secure environments with strict access controls.</li>
            <li><strong>Privacy Controls:</strong> You have control over your privacy settings, allowing you to manage who can view your content.</li>
            <li><strong>Regular Audits:</strong> We conduct regular security audits to identify and address potential vulnerabilities.</li>
          </ul>
          <p>
            We are transparent about our data practices. For more details, you can review our <span onClick={() => toggleSection('privacy-policy-title')}>Privacy Policy</span>.
          </p>
          </div>
    </div>
     <div className="privacy-policy-container">
        <div
          id="privacy-policy-title"
          className={`privacy-policy-content ${activeSection === 'privacy-policy-title' ? 'active' : ''}`}
        > 
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how Blog Blitz collects, uses, and protects the personal information of its users.
        </p>
        <h2>Information Collection:</h2>
        <ul>
          <li><strong>Personal Information:</strong> When creating an account, we collect your name, email address, and other details voluntarily provided by you.</li>
          <li><strong>Usage Data:</strong> We gather information about your interaction with our website for analytics and improving user experience.</li>
        </ul>
        <h2>Use of Information:</h2>
        <ul>
          <li><strong>Enhanced User Experience:</strong> Collected data helps us tailor content and features to suit your preferences.</li>
          <li><strong>Communication:</strong> We may use your email to send service-related communications and updates.</li>
        </ul>
        <h2>Data Sharing:</h2>
        <ul>
          <li><strong>Third-Party Services:</strong> We may engage third-party service providers to assist in our operations but do not sell or rent your information.</li>
          <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or to protect our rights.</li>
        </ul>
        <h2>Data Security:</h2>
        <ul>
          <li><strong>Data Security Measures:</strong> We employ standard security measures to protect your information from unauthorized access or alteration.</li>
        </ul>
        <h2>User Rights:</h2>
        <ul>
          <li><strong>Access and Control:</strong> You have the option to access, correct, or delete your personal information by managing your account settings.</li>
          <li><strong>Opt-out:</strong> You can opt-out of receiving promotional communications.</li>
        </ul>
        <h2>Policy Updates:</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy. Any changes will be effective upon posting the revised policy.
        </p>
        <p>
          By using Blog Blitz, you agree to the terms outlined in this Privacy Policy.
        </p>
        <p>This Privacy Policy was last updated on 19th November 2023.</p>
      </div>
    </div>
    </div>
    
  );
};

export default PrivacySecurity;
