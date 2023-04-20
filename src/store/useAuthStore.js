import { create } from "zustand";

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
  isAuthenticated: false,
}));

export const useAuthStore = authStore((state) => ({
  token: state.token,
  user: state.user,
  setToken: state.setToken,
  setUser: state.setUser,
  logout: state.logout,
  isAuthenticated: state.isAuthenticated,
}));

export function initializeAuth() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token && user) {
    authStore.setState((state) => ({
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

  authStore.setState((state) => ({
    ...state,
    token: null,
    user: null,
    isAuthenticated: false,
  }));
}
