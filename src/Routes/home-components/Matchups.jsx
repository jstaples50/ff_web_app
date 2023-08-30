import React, { useEffect, useState } from "react";
import VersusComponent from "./section-components/VersusComponent";

import {
  matchupArray,
  getAllRosterData,
  createManagerObjects,
  createMatchupArray,
} from "../../lib/helper-functions/helper";

const Matchups = ({ managers }) => {
  return (
    <div>
      <h2>Matchups Component</h2>
      {managers &&
        managers.map((manager) => (
          <p key={manager.userName}>
            {manager.userName} Matchup Id: {manager.matchupId}
          </p>
        ))}

      <VersusComponent />
    </div>
  );
};

export default Matchups;
