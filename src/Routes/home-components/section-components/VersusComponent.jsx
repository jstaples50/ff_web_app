import React, { useEffect } from "react";
import TeamBadge from "./TeamBadge";

const VersusComponent = ({ matchup }) => {
  return (
    <div>
      <h3>Versus Component</h3>
      {matchup && (
        <div>
          <TeamBadge team={matchup[0]} />
          <p>vs</p>
          <TeamBadge team={matchup[1]} />
        </div>
      )}

      {/* <p>{team.teamName}</p> */}
    </div>
  );
};

export default VersusComponent;
