import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (newUser) => set(() => ({ user: newUser })),
  clearUser: () => set(() => ({ user: null })),
  signup: async (formData) => {
    // Make a POST request to the server to create a new user
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const newUser = await response.json();
      set(() => ({ user: newUser }));
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  },
}));

export { useUserStore };
