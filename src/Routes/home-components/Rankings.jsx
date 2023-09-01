import React, { useState, useEffect } from "react";
import TeamRank from "./section-components/TeamRank";

const Rankings = ({ managers }) => {
  return (
    <div>
      <h2>Rankings Component</h2>
      {managers && managers.map((manager) => <TeamRank manager={manager} />)}
    </div>
  );
};

export default Rankings;
