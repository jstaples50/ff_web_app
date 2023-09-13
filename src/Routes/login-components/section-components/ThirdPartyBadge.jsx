import React from "react";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../../../theme";

const ThirdPartyBadge = ({ socialPlatform }) => {
  return (
    <Box
      width={"100vw"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        className="social-badge-container"
        display={"flex"}
        justifyContent={"center"}
        width={"300px"}
      >
        <Box
          className="social-badge"
          display={"flex"}
          justifyContent={"flex-start"}
          width={"200px"}
        >
          <Box
            className="social-circle"
            width={"50px"}
            height={"50px"}
            bgcolor={colors.confirm}
            border={"solid black 1px"}
            borderRadius={"50%"}
            m={"5px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IconButton disableRipple="true">
              <CloseIcon style={{ fontSize: "66px" }} />
            </IconButton>
          </Box>
          <h3 style={{ margin: "5px" }}>{socialPlatform}</h3>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdPartyBadge;
