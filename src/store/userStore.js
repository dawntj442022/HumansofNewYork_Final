import create from "zustand";

const userStore = create((set) => ({
  user: null,
  setUser: (newUser) => set(() => ({ user: newUser })),
  clearUser: () => set(() => ({ user: null })),
}));

export default userStore;
