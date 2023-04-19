import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostStore } from "../store/postStore";
import SinglePost from "../components/SinglePost";
import CommentForm from "../components/CommentForm";
import Thumbs from "../components/Thumbs";

const SinglePostPage = () => {
  const { postId } = useParams();
  const { post, fetchPost } = usePostStore();

  useEffect(() => {
    fetchPost(postId);
  }, [fetchPost, postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SinglePost post={post} />
      <Thumbs postId={post.id} />
      <CommentForm postId={post.id} />
    </div>
  );
};

export default SinglePostPage;
