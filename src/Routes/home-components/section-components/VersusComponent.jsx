import React, { useEffect } from "react";
import { Box } from "@mui/material";
import TeamBadge from "./TeamBadge";

const VersusComponent = ({ matchup }) => {
  return (
    <Box display={"flex"} justifyContent={"center"} width={"100vw"}>
      {matchup && (
        <Box
          className="versus-container"
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"500px"}
          m={"10px"}
        >
          <TeamBadge team={matchup[0]} />
          <p>vs</p>
          <TeamBadge team={matchup[1]} />
        </Box>
      )}

      {/* <p>{team.teamName}</p> */}
    </Box>
  );
};

export default VersusComponent;
