import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Thumbs = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  return (
    <div>
      <button onClick={handleLike}>
        <FaThumbsUp color={liked ? "blue" : "gray"} /> Like
      </button>
      <button onClick={handleDislike}>
        <FaThumbsDown color={disliked ? "red" : "gray"} /> Dislike
      </button>
    </div>
  );
};

export default Thumbs;
