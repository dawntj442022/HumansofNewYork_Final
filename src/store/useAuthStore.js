import { create } from "zustand";

const useAuthStore = create((set) => ({
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
  isAuthenticated: false,
}));

export function initializeAuth() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token && user) {
    useAuthStore.setState((state) => ({
      ...state,
      token: token,
      user: user,
      isAuthenticated: true,
    }));
  }
}

export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  useAuthStore.setState((state) => ({
    ...state,
    token: null,
    user: null,
    isAuthenticated: false,
  }));
}

export default useAuthStore;
