import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserPostStore } from "../store/userPostStore";
import { usePostStore } from "../services/posts"; // importing named function

const Home = () => {
  const posts = useUserPostStore((state) => state.posts);
  const setPosts = useUserPostStore((state) => state.setPosts);

  const fetchPosts = usePostStore((state) => state.fetchPosts); // getting fetchPosts function

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, [fetchPosts, setPosts]);

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
