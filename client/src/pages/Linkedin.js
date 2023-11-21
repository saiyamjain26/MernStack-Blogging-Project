import React from 'react';
import './Linkedin.css'; // Import the CSS file for LinkedIn styles

const LinkedIn = () => {
  // Array of team members with their LinkedIn details
  const teamMembers = [
    {
      name: 'Saiyam',
      linkedinUsername: 'saiyamjain26',
      profilePic: 'https://i.postimg.cc/vmgdShn6/Whats-App-Image-2023-11-18-at-22-35-33.jpg',
      link: 'https://www.linkedin.com/in/saiyamjain26/',
    },
    {
      name: 'Shreya',
      linkedinUsername: 'shreyadas2003',
      profilePic: 'https://i.postimg.cc/9XJC0Dc0/Whats-App-Image-2023-11-18-at-22-42-30.jpg',
      link: 'https://www.linkedin.com/in/shreya-das-754716279/',
    },
    {
      name: 'Aryan',
      linkedinUsername: 'aryantripathi',
      profilePic: 'https://i.postimg.cc/dQnG4jjB/IMG-20230301-134450-011.jpg',
      link: 'https://www.linkedin.com/in/aryan-tripathi-1031a024b/',
    },
    {
      name: 'Ayush',
      linkedinUsername: 'exeayush',
      profilePic: 'https://i.postimg.cc/kMjtxX7Y/IMG-0727.jpg',
      link: 'https://www.linkedin.com/in/exeayush/',
    },
    {
      name: 'Rahul',
      linkedinUsername: 'rahulrathi',
      profilePic: "https://i.postimg.cc/9ftDzcxp/20231118-203619.jpg",
      link: 'https://www.linkedin.com/in/rahul-rathi-85ab42206/',
    },
  ];

  return (
    <div className="your-page5">
    <div className="linkedin-container">
      <h1>LinkedIn</h1>
      <div className="linkedin-members">
        {teamMembers.map((member, index) => (
          <div className="linkedin-card" key={index}>
            <img src={member.profilePic} alt={member.name} />
            <h3>{member.name}</h3>
            <p>
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                {member.linkedinUsername}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LinkedIn;
