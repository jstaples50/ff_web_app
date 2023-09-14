import React, { useEffect, useState } from "react";
import VersusComponent from "./section-components/VersusComponent";

import { filterByMatchup } from "../../lib/helper-functions/helper";

const Matchups = ({ managers }) => {
  const [matchups, setMatchups] = useState(null);

  useEffect(() => {
    setMatchups(filterByMatchup(managers));
  }, [managers]);

  return (
    <div>
      <h4>This Weeks Matchups</h4>
      {matchups &&
        matchups.map((matchup) => <VersusComponent matchup={matchup} />)}
    </div>
  );
};

export default Matchups;
