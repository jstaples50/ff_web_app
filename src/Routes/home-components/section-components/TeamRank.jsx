import React from "react";

const TeamRank = ({ manager, placement }) => {
  return (
    <div>
      <h3>TeamRank Component</h3>
      <p>
        {placement}. {manager.teamName} Record: {manager.results.wins}-
        {manager.results.losses}
      </p>
    </div>
  );
};

export default TeamRank;
