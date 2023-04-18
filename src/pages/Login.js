import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../store";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { login } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
    history.push("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
