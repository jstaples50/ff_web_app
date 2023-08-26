import React from "react";
import TeamBadge from "./TeamBadge";

const VersusComponent = () => {
  return (
    <div>
      <h3>Versus Component</h3>
      <div>
        <TeamBadge />
        <p>vs</p>
        <TeamBadge />
      </div>
    </div>
  );
};

export default VersusComponent;
