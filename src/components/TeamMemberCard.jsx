import React from "react";
import "./TeamMember.css";
const memberCard = ({ name, job }) => {
  return (
    <div className="member-card">
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
};

export default memberCard;
