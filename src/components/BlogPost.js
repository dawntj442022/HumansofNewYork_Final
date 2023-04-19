import React from "react";
import { useStore } from "../store/postStore";

const BlogPost = ({ post }) => {
  const { title, body, author, imageUrl, thumbsUp, thumbsDown } = post;
  const { upvote, downvote } = useStore((state) => state.actions);

  const handleUpvote = () => {
    upvote(post);
  };

  const handleDownvote = () => {
    downvote(post);
  };

  return (
    <div className="blog-post">
      {imageUrl && (
        <div className="blog-post__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="blog-post__content">
        <h2 className="blog-post__title">{title}</h2>
        <p className="blog-post__body">{body}</p>
        <div className="blog-post__author">By {author}</div>
        <div className="blog-post__thumbs">
          <button onClick={handleUpvote}>
            <i className="fa fa-thumbs-up" /> {thumbsUp}
          </button>
          <button onClick={handleDownvote}>
            <i className="fa fa-thumbs-down" /> {thumbsDown}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
