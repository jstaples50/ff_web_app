import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { colors } from "../../theme";

import {
  setTeamCommentsToLocalStorage,
  getTeamCommentFromLocalStorage,
  getCurrentManagerInLocalStorage,
} from "../../lib/helper-functions/localStorage";

import Comment from "./Comment";

const CommentChat = () => {
  const [comment, setComment] = useState("");
  const [commentThread, setCommentThread] = useState([]);
  const [currentManager, setCurrentManager] = useState(null);

  useEffect(() => {
    setCommentThread(getTeamCommentFromLocalStorage());
    setCurrentManager(getCurrentManagerInLocalStorage());
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      comment: comment,
      team: currentManager.teamName,
      user: currentManager.userName,
      objForBadge: currentManager,
    };
    console.log(newComment);
    setTeamCommentsToLocalStorage(newComment);
    setCommentThread(getTeamCommentFromLocalStorage());
    setComment("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <form
        onSubmit={handleCommentSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={comment}
          placeholder="Add Comment"
          onChange={handleCommentChange}
          style={{
            margin: "10px",
            textAlign: "center",
            width: "200px",
            height: "40px",
            background: colors.primary,
          }}
        />
        <button
          className="announcement-button"
          disabled={comment === ""}
          style={{
            background: colors.confirm,
            width: "100px",
            height: "45px",
            borderRadius: "10px",
          }}
        >
          Submit Comment
        </button>
      </form>
      <p>Comment: {comment}</p>
      <Box
        className="comment-thread-container"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {commentThread.length ? (
          commentThread.map((comment) => <Comment comment={comment} />)
        ) : (
          <p>No Comments Yet!</p>
        )}
      </Box>
    </div>
  );
};

export default CommentChat;
