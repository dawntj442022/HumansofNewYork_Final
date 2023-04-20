import { useState } from "react";
import { usePostStore } from "../store/postStore";

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState("");
  const { addComment } = usePostStore();

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim() !== "") {
      addComment(postId, commentText);
      setCommentText("");
    }
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <div>
        <label htmlFor="comment-text">Comment:</label>
        <br />
        <textarea
          id="comment-text"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
