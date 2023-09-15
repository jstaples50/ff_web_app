import React from "react";
import { Box, IconButton } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { colors } from "../../theme";
import TeamBadge from "../home-components/section-components/TeamBadge";

const Comment = ({ comment }) => {
  return (
    <Box
      className="comment-container"
      bgcolor={colors.primary}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      flexDirection={"column"}
      width={"400px"}
      borderRadius={"14px"}
      margin={"10px auto"}
      // height={"400px"}
    >
      <TeamBadge team={comment.objForBadge} />
      <p style={{ marginLeft: "20px" }}>{comment.comment}</p>
      <Box className="like-bar" width={"100%"}>
        <IconButton>
          <ThumbUpOutlinedIcon />
        </IconButton>
        <IconButton>
          <ThumbDownOffAltOutlinedIcon />
        </IconButton>
        <IconButton>
          <ReplyOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Comment;
