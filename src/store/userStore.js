import axios from "axios";

const userStore = (set) => ({
  user: null,

  fetchUser: async (userId) => {
    try {
      const response = await axios.get(`/users/${userId}`);
      set({ user: response.data });
    } catch (error) {
      console.error(error);
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`/users/${userId}`, userData);
      set({ user: response.data });
    } catch (error) {
      console.error(error);
    }
  },
});

export default userStore;
