import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPosts from "./pages/MyPosts";
import SinglePostPage from "./pages/SinglePostPage";
import { useAuthStore } from "./store/authStore";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <Switch>
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
      </Switch>
    </Router>
  );
}

export default App;
