// src/pages/login/Login.jsx
import "./Login.scss";

import FormInput from "../../components/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin"; // useLogin hook’ing bo’lishi kerak

function Login() {
  const { login, isPending, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await login(email, password);
      navigate("/home"); // muvaffaqiyatli kirgach /home ga o‘tamiz
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src="./images/logo-large.svg" alt="logo" />
        <div>
          <h5 className="login-image-title">
            Keep track of your money and save for your future
          </h5>
          <p className="login-image-description">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <div className="login-form-container">
        <h1 className="login-header">Login</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            placeholder="Type here..."
            type="email"
          />
          <FormInput
            label="Password"
            name="password"
            placeholder="Type here..."
            type="password"
          />
          <button
            className="login-submit-btn"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Login"}
          </button>
          {error && <p className="error-text">{error}</p>}
        </form>
        <p className="register-text">
          Need to create account?{" "}
          <Link className="register-link" to="/register">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
