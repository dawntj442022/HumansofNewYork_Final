import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
