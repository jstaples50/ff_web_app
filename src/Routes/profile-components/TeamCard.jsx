import React from "react";

const TeamCard = ({ team }) => {
  return (
    <div>
      <h2>TeamCard Component</h2>
      <p>{team.teamName}</p>
    </div>
  );
};

export default TeamCard;
