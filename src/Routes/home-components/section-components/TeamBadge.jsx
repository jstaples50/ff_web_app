import React from "react";

const TeamBadge = ({ team }) => {
  return <div>{team && <p>{team.teamName}</p>}</div>;
};

export default TeamBadge;
