import { create } from "zustand";

const useUserPostStore = create((set, get) => ({
  userPosts: [],
  isLoading: false,
  error: null,
  fetchUserPosts: async (userId) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`/api/users/${userId}/posts`);
      const userPosts = await response.json();
      set({ userPosts, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  setUserPosts: (userPosts) => set({ userPosts }),
  addUserPost: (post) =>
    set((state) => ({ userPosts: [...state.userPosts, post] })),
  deleteUserPost: (postId) =>
    set((state) => ({
      userPosts: state.userPosts.filter((post) => post.id !== postId),
    })),
  updateUserPost: (postId, updatedPost) =>
    set((state) => ({
      userPosts: state.userPosts.map((post) =>
        post.id === postId ? updatedPost : post
      ),
    })),
}));

export default useUserPostStore;
