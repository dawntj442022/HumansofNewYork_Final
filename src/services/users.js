import { create } from "zustand";

const initialState = {
  users: [],
  error: null,
};

const useUserStore = create((set) => ({
  state: initialState,
  actions: {
    getUsers: async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        set((state) => ({ ...state, users: data }));
      } catch (error) {
        set((state) => ({ ...state, error: error.message }));
      }
    },
  },
}));

export default useUserStore;
