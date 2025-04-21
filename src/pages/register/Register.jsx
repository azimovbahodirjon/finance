// src/pages/Register.jsx
import "./Register.scss";
import { useRegister } from "../../hooks/useRegister";
import FormInput from "../../components/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const { register, isPending } = useRegister();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");

    register(email, displayName, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Registration error:", err.message);
      });
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <img src="./images/logo-large.svg" alt="" className="register-logo" />
        <div>
          <h5 className="register-left-title">
            Keep track of your money and save for your future
          </h5>
          <p className="register-left-caption">
            Personal finance app puts you in control of your spending...
          </p>
        </div>
      </div>

      <div className="register-form-container">
        <h1 className="register-title">Sign Up</h1>
        <form onSubmit={handleRegister} className="register-form">
          <FormInput
            label="Name"
            name="displayName"
            type="text"
            placeholder="Type here..."
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Type here..."
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Type here..."
          />
          <button className="register-btn" type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Create Account"}
          </button>
        </form>
        <p className="register-caption">
          Already have an account?{" "}
          <Link to="/login" className="register-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
