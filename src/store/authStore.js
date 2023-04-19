import create from "zustand";

const authStore = create((set) => ({
  token: null,
  user: null,

  setToken: (newToken) => {
    set((state) => ({ ...state, token: newToken }));
  },
  setUser: (newUser) => {
    set((state) => ({ ...state, user: newUser }));
  },
  logout: () => {
    set((state) => ({ ...state, token: null, user: null }));
  },
}));

export default authStore;
