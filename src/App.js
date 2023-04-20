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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          {isAuthenticated ? <MyPosts /> : <LoginPage />}
        </Route>
        <Route path="/signup">
          {isAuthenticated ? <MyPosts /> : <SignupPage />}
        </Route>
        <Route path="/my-posts">
          {isAuthenticated ? <MyPosts /> : <LoginPage />}
        </Route>
        <Route path="/posts/:id">
          <SinglePostPage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
