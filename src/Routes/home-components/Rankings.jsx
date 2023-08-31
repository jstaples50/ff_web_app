import React, { useState, useEffect } from "react";
import TeamRank from "./section-components/TeamRank";
import { sortByRankings } from "../../lib/helper-functions/helper";

const Rankings = ({ managers }) => {
  const sortedByRankingsManagerArray = sortByRankings(managers);
  return (
    <div>
      <h2>Rankings Component</h2>
      {managers &&
        sortedByRankingsManagerArray.map((manager, index) => (
          <TeamRank manager={manager} placement={index + 1} />
        ))}
    </div>
  );
};

export default Rankings;
