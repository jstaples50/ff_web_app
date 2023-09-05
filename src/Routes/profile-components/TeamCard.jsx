import React from "react";

const TeamCard = ({ team }) => {
  return (
    <div>
      <h2>TeamCard Component</h2>
      {team ? (
        <>
          <h3>{team.teamName}</h3>
          <h4>{team.userName}</h4>
          <div>
            <p>#{team.ranking}</p>
            <p>rank</p>
            <p>
              {team.results.wins}-{team.results.losses}
            </p>
            <p>record</p>
          </div>
        </>
      ) : (
        <p>No Team Found</p>
      )}
    </div>
  );
};

export default TeamCard;
