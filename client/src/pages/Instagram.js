// Instagram.js

import React from 'react';
import './Instagram.css'; // Import the CSS file

const Instagram = () => {
  // Array of team members with their Instagram details
  const teamMembers = [
    {
      name: 'Saiyam ',
      username: 'ig.saiyam',
      profilePic: 'https://i.postimg.cc/vmgdShn6/Whats-App-Image-2023-11-18-at-22-35-33.jpg',
      link: 'https://www.instagram.com/ig.saiyam/',
    },
    {
      name: 'Shreya ',
      username: 'shreya_123_das',
      profilePic: 'https://i.postimg.cc/9XJC0Dc0/Whats-App-Image-2023-11-18-at-22-42-30.jpg',
      link: 'https://www.instagram.com/shreya_123_das/',
    },
    {
      name: 'Aryan',
      username: '___aryan___23',
      profilePic: 'https://i.postimg.cc/rpMqzxRd/IMG-20230301-134450-011.jpg',
      link: 'https://www.instagram.com/___aryan___23/',
    },
    {
      name: 'Ayush',
      username: 'exeayush',
      profilePic: 'https://i.postimg.cc/kMjtxX7Y/IMG-0727.jpg',
      link: 'https://www.instagram.com/exeayush/',
    },
    {
      name: 'Rahul',
      username: 'rathirahul1000',
      profilePic: "https://i.postimg.cc/9ftDzcxp/20231118-203619.jpg",
      link: 'https://www.instagram.com/rathirahul1000/',
    },
  ];

  return (
    <div className="your-page4">
    <div className="team-container">
      <h1>Instagram Handles</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.profilePic} alt={member.name} />
            <h3>{member.name}</h3>
            <p>
              Follow on Instagram: {' '}
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                @{member.username}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Instagram;
