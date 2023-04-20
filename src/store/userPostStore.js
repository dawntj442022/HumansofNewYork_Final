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
}));

export { useUserPostStore };
