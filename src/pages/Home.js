import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { fetchPosts } from "../services/posts";

const Home = () => {
  const posts = useStore((state) => state.posts);
  const setPosts = useStore((state) => state.setPosts);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, [setPosts]);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
