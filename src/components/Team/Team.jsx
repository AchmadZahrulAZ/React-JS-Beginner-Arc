import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'Larry F. Burnett', position: 'CEO' },
    { name: 'Meghan J. Webb', position: 'CTO' },
    { name: 'Yvonne J. Cullum', position: 'CFO' },
    { name: 'Diana H. Williams', position: 'COO' },
  ];

  return (
    <section className="team">
      <h3>Our Leaders</h3>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={`path/to/member${index + 1}.jpg`} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
