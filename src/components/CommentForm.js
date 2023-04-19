import React, { useState } from "react";
import { useStore } from "../store/postStore";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");
  const { addComment } = useStore((state) => state.actions);

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(postId, comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Leave a comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
