import React from 'react';

const Skill = ({ logo, skillName }) => (
  <div className="skills__skill">
    <div className="skills__logo">
      <img src={logo} alt={skillName} />
    </div>
    <p>{skillName}</p>
  </div>
);

export default Skill;
