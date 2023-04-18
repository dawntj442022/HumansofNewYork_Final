import React, { useState } from "react";
import { useStore } from "../store/store";

function PostForm() {
  const addPost = useStore((state) => state.addPost);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Post</h3>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Body:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
