import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { fetchUserPosts } from "../services/posts";

const MyPosts = () => {
  const user = useStore((state) => state.user);
  const userPosts = useStore((state) => state.userPosts);
  const setUserPosts = useStore((state) => state.setUserPosts);

  useEffect(() => {
    fetchUserPosts(user.id).then((data) => {
      setUserPosts(data);
    });
  }, [user.id, setUserPosts]);

  return (
    <div>
      <h1>My Posts</h1>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
