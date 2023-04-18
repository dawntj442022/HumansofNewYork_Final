export async function registerUser(userData) {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Unable to register user");
  return data;
}

export async function loginUser(userData) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Unable to login");
  return data;
}

export async function fetchCurrentUser() {
  const response = await fetch("/api/user");
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.message || "Unable to fetch current user");
  return data;
}

export async function fetchPosts() {
  const response = await fetch("/api/posts");
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Unable to fetch posts");
  return data;
}

export async function createPost(postData) {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Unable to create post");
  return data;
}
