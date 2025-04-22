import "./Login.scss";

import FormInput from "../../components/formInput/FormInput";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const { login, isPending } = useLogin();
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);
  };
  return (
    <div className="login-page">
      <div className="login-left">
        <img src="./images/logo-large.svg" alt="login image" />
        <div>
          <h5 className="login-left-title">
            Keep track of your money and save for your future
          </h5>
          <p className="login-left-caption">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <img
        className="login-image"
        src="/images/illustration-authentication.svg"
        alt="finance image"
      />
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin}>
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
          <button className="login-btn">
            {isPending ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="register-caption">
          Need to create account?{" "}
          <Link className="link-register" to="/register">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
