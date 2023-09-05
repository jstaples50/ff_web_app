import React, { useState, useEffect } from "react";

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
      user: currentManager.teamName,
    };
    console.log(newComment);
    setTeamCommentsToLocalStorage(newComment);
    setCommentThread(getTeamCommentFromLocalStorage());
    setComment("");
  };

  return (
    <div>
      <h2>Comment Chat Component</h2>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={comment}
          placeholder="Add Comment"
          onChange={handleCommentChange}
        />
        <button disabled={comment === ""}>Submit Comment</button>
      </form>
      <p>Comment: {comment}</p>
      <div>
        {commentThread.length ? (
          commentThread.map((comment) => <Comment comment={comment} />)
        ) : (
          <p>No Comments Yet!</p>
        )}
      </div>
    </div>
  );
};

export default CommentChat;
