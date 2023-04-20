import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserPostStore } from "../store/userPostStore";

const MyPosts = () => {
  const { userPosts, fetchUserPosts } = useUserPostStore();

  useEffect(() => {
    fetchUserPosts();
  }, [fetchUserPosts]);

  return (
    <div>
      <h1>My Posts</h1>
      {userPosts.length > 0 ? (
        <ul>
          {userPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>You haven't posted anything yet!</div>
      )}
    </div>
  );
};

export default MyPosts;
