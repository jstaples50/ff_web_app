import React from "react";

const TeamRank = ({ manager }) => {
  return (
    <div>
      <h3>TeamRank Component</h3>
      <p>
        {manager.ranking}. {manager.teamName} Record: {manager.results.wins}-
        {manager.results.losses} Total Fantasy Points:{" "}
        {manager.results.totalPoints}
      </p>
    </div>
  );
};

export default TeamRank;
