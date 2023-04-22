import { create } from "zustand";

const usePostStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,
  fetchPosts: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/posts");
      const posts = await response.json();
      set({ posts, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  createPost: async (postData) => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const post = await response.json();
      set({ posts: [...get().posts, post] });
      return post;
    } catch (error) {
      set({ error });
      return null;
    }
  },
}));

export default usePostStore;
