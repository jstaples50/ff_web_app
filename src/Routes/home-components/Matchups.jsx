import React, { useEffect, useState } from "react";
import VersusComponent from "./section-components/VersusComponent";

import {
  matchupArray,
  getAllRosterData,
  createManagerObjects,
} from "../../lib/helper-functions/helper";

const Matchups = ({ managers, matchups }) => {
  return (
    <div>
      <h2>Matchups Component</h2>
      {managers && managers.map((manager) => <p>{manager.userName}</p>)}
      <VersusComponent />
      <VersusComponent />
      <VersusComponent />
      <VersusComponent />
    </div>
  );
};

export default Matchups;
