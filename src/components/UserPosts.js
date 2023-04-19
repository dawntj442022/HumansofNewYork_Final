import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserPosts } from "../services/posts";

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getUserPosts(userId);
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h2>User Posts:</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPosts;
