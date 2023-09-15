import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { colors } from "../../theme";

const TeamCard = ({ team }) => {
  return (
    <div>
      {team ? (
        <>
          <Box
            className="profile-name-badge"
            bgcolor={colors.primary}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              className="team-circle"
              width={"150px"}
              height={"150px"}
              bgcolor={colors.confirm}
              border={"solid black 1px"}
              borderRadius={"50%"}
              mt={"15px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IconButton disableRipple="true">
                <CloseIcon style={{ fontSize: "200px" }} />
              </IconButton>
            </Box>
            <h2>{team.teamName}</h2>
            <h4>{team.userName}</h4>
          </Box>
          <Box
            className="team-card-info"
            display={"flex"}
            justifyContent={"center"}
          >
            <Box className="team-card-rank" m={"0 60px"}>
              <p style={{ fontWeight: "bold" }}>#{team.ranking}</p>
              <p>rank</p>
            </Box>
            <Box className="team-card-record" m={"0 60px"}>
              <p>
                {team.results.wins}-{team.results.losses}
              </p>
              <p>record</p>
            </Box>
          </Box>
        </>
      ) : (
        <p>No Team Found</p>
      )}
    </div>
  );
};

export default TeamCard;
