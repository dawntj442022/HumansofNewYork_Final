import api from "../utils/api";

const postStore = (set) => ({
  posts: [],

  fetchPosts: async () => {
    try {
      const response = await api.get("/posts");
      set({ posts: response.data });
    } catch (error) {
      console.error(error);
    }
  },

  createPost: async (postData) => {
    try {
      const response = await api.post("/posts", postData);
      set((state) => ({ posts: [...state.posts, response.data] }));
    } catch (error) {
      console.error(error);
    }
  },

  updatePost: async (postId, postData) => {
    try {
      const response = await api.put(`/posts/${postId}`, postData);
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId ? response.data : post
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  deletePost: async (postId) => {
    try {
      await api.delete(`/posts/${postId}`);
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== postId),
      }));
    } catch (error) {
      console.error(error);
    }
  },
});

export default postStore;
