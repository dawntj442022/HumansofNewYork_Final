import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPosts from "./pages/MyPosts";
import SinglePostPage from "./pages/SinglePostPage";
import { initializeAuth } from "./store/authStore";
import React from "react";
import useAuthStore from "./store/useAuthStore";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  React.useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isAuthenticated ? <MyPosts /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <MyPosts /> : <SignupPage />}
        />
        <Route
          path="/my-posts"
          element={isAuthenticated ? <MyPosts /> : <LoginPage />}
        />
        <Route path="/posts/:id" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
