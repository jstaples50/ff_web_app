import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <h3>Comment Component</h3>
      <p>
        {comment.comment} -{comment.user}
      </p>
    </div>
  );
};

export default Comment;
