import create from "zustand";

const postStore = create((set, get) => ({
  posts: [],
  setPosts: (newPosts) => set({ posts: newPosts }),
  addPost: (newPost) => set({ posts: [...get().posts, newPost] }),
  deletePost: (postId) => {
    const newPosts = get().posts.filter((post) => post.id !== postId);
    set({ posts: newPosts });
  },
  updatePost: (updatedPost) => {
    const newPosts = get().posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    set({ posts: newPosts });
  },
  getPosts: async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      set({ posts: data.posts });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default postStore;
