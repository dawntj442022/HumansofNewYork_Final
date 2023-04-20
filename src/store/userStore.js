import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (newUser) => set(() => ({ user: newUser })),
  clearUser: () => set(() => ({ user: null })),
  signup: (formData) => {
    // your signup logic here
  },
}));

export { useUserStore };
