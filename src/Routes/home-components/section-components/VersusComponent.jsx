import React, { useEffect } from "react";
import TeamBadge from "./TeamBadge";

const VersusComponent = ({ versus }) => {
  useEffect(() => {
    // console.log(versus);
  }, []);

  return (
    <div>
      <h3>Versus Component</h3>
      {/* <div>
        <TeamBadge team={versus[0]} />
        <p>vs</p>
        <TeamBadge team={versus[1]} />
      </div> */}
    </div>
  );
};

export default VersusComponent;
