import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { signup } = useUserStore();

  const handleSignup = async (formData) => {
    try {
      await signup(formData);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
};

export default SignupPage;
