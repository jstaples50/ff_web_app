import React from "react";

import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../../../theme";

const TeamBadge = ({ team }) => {
  const teamBadgeStyle = {
    color: colors.confirm,
    margin: "2px",
  };

  return (
    <div>
      {team && (
        <Link to={`/profile/${team.userId}`} style={{ textDecoration: "none" }}>
          <Box
            className="team-badge"
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            width={"280px"}
            height={"100px"}
            bgcolor={colors.primary}
            borderRadius="24px"
            m={"20px 10px"}
          >
            <Box
              className="team-circle"
              width={"50px"}
              height={"50px"}
              bgcolor={colors.confirm}
              border={"solid black 1px"}
              borderRadius={"50%"}
              ml={"15px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IconButton disableRipple="true">
                <CloseIcon style={{ fontSize: "66px" }} />
              </IconButton>
            </Box>
            <Box
              className="team-name-user"
              width={"300px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              textAlign={"center"}
            >
              <span style={{ fontWeight: "bold" }}>
                <p
                  className="profile-link"
                  key={team.userId}
                  style={teamBadgeStyle}
                >
                  {team.userName}
                </p>
              </span>

              <p
                className="profile-link"
                key={team.teamName}
                style={teamBadgeStyle}
              >
                {team.teamName}
              </p>
            </Box>
          </Box>
        </Link>
      )}
    </div>
  );
};

export default TeamBadge;
