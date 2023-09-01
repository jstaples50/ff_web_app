import React from "react";
import IndividualBadge from "./IndividualBadge";
import { getLeagueData } from "../../apis/sleeper/apiCalls";

const HistoryColumn = () => {
  return (
    <div>
      <h2>History Column Component</h2>
      <p>Syndicate Champion</p>
      <IndividualBadge />
      <p>Toilet King</p>
      <IndividualBadge />
      <p>Bottom of the Ranks</p>
      <IndividualBadge />
    </div>
  );
};

export default HistoryColumn;
