// OurTeam.js

import React from 'react';
import './OurTeam.css'; // Import the CSS file for Our Team styles

const OurTeam = () => {
  return (
    <div className="your-page8">
    <div className="our-team-container">
      <h1>Our Team</h1>
      <p>
        Meet our dedicated team members who work tirelessly to achieve our goals and
        ensure success.
      </p>
      <div className="team-members">
        {/* Team member cards */}
        <div className="team-member">
          <h3>Saiyam Jain</h3>
          <p>Hardworking and committed to excellence, Saiyam leads the team with determination and is the mastermind behind the website.</p>
        </div>
        <div className="team-member">
          <h3>Shreya Das</h3>
          <p>Shreya is a detail-oriented individual, ensuring precision and quality in every task she undertakes.</p>
        </div>
        <div className="team-member">
          <h3>Aryan Tripathi</h3>
          <p>Aryan is a marketing maestro, blending strategy and creativity to effectively communicate our message</p>
        </div>
        <div className="team-member">
          <h3>Ayush Kumar Singh</h3>
          <p>Ayush, the content specialist, brings innovation and creativity to our projects, making them stand out.</p>
        </div>
        <div className="team-member">
          <h3>Rahul Rathi</h3>
          <p>Rahul, the design virtuoso, transforms ideas into visually stunning creations that captivate our audience.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurTeam;
