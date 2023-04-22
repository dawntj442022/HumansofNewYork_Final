import { create, useStore } from "zustand";
import { useEffect } from "react";

const useAuthStore = create((set) => ({
  token: null,
  user: null,

  setToken: (newToken) => {
    set((state) => ({ ...state, token: newToken }));
    localStorage.setItem("token", newToken);
  },
  setUser: (newUser) => {
    set((state) => ({ ...state, user: newUser }));
    localStorage.setItem("user", JSON.stringify(newUser));
  },
  logout: () => {
    set((state) => ({ ...state, token: null, user: null }));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
}));

export const useAuth = () => {
  return useStore((state) => ({
    token: state.token,
    user: state.user,
    setToken: state.setToken,
    setUser: state.setUser,
    logout: state.logout,
    isAuthenticated: !!state.token,
  }));
};

export const useAuthActions = () => {
  const { setToken, setUser, logout } = useAuth();

  const login = (token, user) => {
    setToken(token);
    setUser(user);
  };

  return { login, logout };
};

export const useAuthState = () => {
  return useAuth((state) => ({
    token: state.token,
    user: state.user,
    isAuthenticated: state.isAuthenticated,
  }));
};

export const useAuthInitializer = () => {
  const { isAuthenticated } = useAuth();
  const { login } = useAuthActions();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (isAuthenticated && token && user) {
      login(token, user);
    }
  }, [isAuthenticated, login]);

  return null;
};

export const initializeAuth = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token && user) {
    useAuthStore.setState((state) => ({
      ...state,
      token: token,
      user: user,
    }));
  }
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  useAuthStore.setState((state) => ({
    ...state,
    token: null,
    user: null,
  }));
};
