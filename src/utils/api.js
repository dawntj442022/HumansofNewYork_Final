import axios from "axios";

export async function registerUser(userData) {
  try {
    const response = await axios.post("/api/register", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Unable to register user");
  }
}

export async function loginUser(userData) {
  try {
    const response = await axios.post("/api/login", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Unable to login");
  }
}

export async function fetchCurrentUser() {
  try {
    const response = await axios.get("/api/user");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to fetch current user"
    );
  }
}

export async function fetchPosts() {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Unable to fetch posts");
  }
}

export async function createPost(postData) {
  try {
    const response = await axios.post("/api/posts", postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Unable to create post");
  }
}
