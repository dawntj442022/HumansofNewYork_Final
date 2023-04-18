import React from "react";
import moment from "moment";

function Post({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Posted by {post.author}</p>
      <p>Posted {moment(post.createdAt).fromNow()}</p>
    </div>
  );
}

export default Post;
