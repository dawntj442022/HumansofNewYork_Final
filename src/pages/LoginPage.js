import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../store/authStore";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    try {
      await login(email, password);
      history.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
