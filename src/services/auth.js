import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    // Send credentials to server and await response
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      // Set user and authentication status
      const user = await response.json();
      set({ user, isAuthenticated: true });
    } else {
      // Handle error response
      const error = await response.text();
      throw new Error(error);
    }
  },
  logout: async () => {
    // Send logout request to server and await response
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.ok) {
      // Clear user and authentication status
      set({ user: null, isAuthenticated: false });
    } else {
      // Handle error response
      const error = await response.text();
      throw new Error(error);
    }
  },
}));

export default useAuthStore;
