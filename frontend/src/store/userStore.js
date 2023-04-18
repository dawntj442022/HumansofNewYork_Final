import api from "../utils/api";

const userStore = (set) => ({
  user: null,

  fetchUser: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      set({ user: response.data });
    } catch (error) {
      console.error(error);
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/users/${userId}`, userData);
      set({ user: response.data });
    } catch (error) {
      console.error(error);
    }
  },
});

export default userStore;
