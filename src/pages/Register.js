import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../src/store";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { register } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    register(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
    history.push("/dashboard");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
