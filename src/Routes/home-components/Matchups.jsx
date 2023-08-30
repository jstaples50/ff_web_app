import React, { useEffect, useState } from "react";
import VersusComponent from "./section-components/VersusComponent";

import {
  matchupArray,
  getAllRosterData,
  createManagerObjects,
  createMatchupArray,
  filterByMatchup,
} from "../../lib/helper-functions/helper";

const Matchups = ({ managers }) => {
  const [matchups, setMatchups] = useState(null);

  useEffect(() => {
    setMatchups(filterByMatchup(managers));
  }, [managers]);

  return (
    <div>
      <h2>Matchups Component</h2>
      {matchups &&
        matchups.map((matchup) => <VersusComponent matchup={matchup} />)}
    </div>
  );
};

export default Matchups;
