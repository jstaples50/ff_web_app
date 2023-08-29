import React, { useEffect, useState } from "react";
import VersusComponent from "./section-components/VersusComponent";

import {
  matchupArray,
  getAllRosterData,
  createManagerObjects,
} from "../../lib/helper-functions/helper";

const Matchups = ({ managers, matchups }) => {
  const [versus, setVersus] = useState([]);

  useEffect(() => {
    setVersus(matchupArray(matchups, managers));
    // console.log(versus);
  }, []);
  return (
    <div>
      <h2>Matchups Component</h2>
      {/* {managers && managers.map((manager) => <p>{manager.userName}</p>)} */}

      {versus &&
        versus.map((pair) => (
          <p>
            {pair[0].teamName} vs {pair[1].teamName}
          </p>
        ))}

      <VersusComponent />
      <VersusComponent />
      <VersusComponent />
      <VersusComponent />
    </div>
  );
};

export default Matchups;
