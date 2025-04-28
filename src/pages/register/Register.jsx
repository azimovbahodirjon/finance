import "./Register.scss";
import { useRegister } from "../../hooks/useRegister";
import FormInput from "../../components/formInput/FormInput";
import { Link } from "react-router-dom";

function Register() {
  const { user, isPending, register } = useRegister();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");
    register(email, password, displayName);
  };

  return (
    <div className="auth-container">
      <div className="auth-side-panel">
        <img
          className="auth-background-image"
          src="/images/illustration-authentication.svg"
          alt="finance illustration"
        />
        <div className="image-overlay">
          <h2 className="finance-logo">finance</h2>
          <div className="text-container">
            <h5 className="auth-heading">
              Keep track of your money and save for your future
            </h5>
            <p className="auth-description">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>

      <div className="auth-form-wrapper">
        <h1 className="auth-title">Sign Up</h1>
        <form onSubmit={handleRegister}>
          <FormInput
            label="Name"
            name="displayName"
            placeholder=""
            type="text"
          />
          <FormInput label="Email" name="email" placeholder="" type="email" />
          <FormInput
            label="Create Password"
            name="password"
            placeholder=""
            type="password"
          />
          <button className="auth-button">
            {isPending ? "Loading..." : "Create Account"}
          </button>
        </form>
        <p className="auth-register-info">
          Already have an account?{" "}
          <Link className="auth-register-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
