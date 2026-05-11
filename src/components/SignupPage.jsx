import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signupPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // Handling submit
  function handleSubmit(e) {
    e.preventDefault();

    // Checking email or password is not empty
    if (!email || !password) {
      setError(true);
      return;
    }

    // Storing user data's as object
    const userData = {
      email,
      password,
    };

    // Storing user data into localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // Clear input fileds
    setEmail("");
    setPassword("");

    // After submit navigate into login page
    navigate("/login");
  }

  // If user have already account then navigate into login page
  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <div className="signup-title-container">
          <h1 className="signup-title">Create Your Account</h1>
          <p className="signup-subtitle">Signup to your account</p>
        </div>
        <form className="signup-input-container" onSubmit={handleSubmit}>
          <p className="signup-input-title">Email Address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="signup-input-section"
          />

          <p className="signup-input-title">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a Password"
            className="signup-input-section"
          />

          <button className="signup-button" type="submit">
            Signup
          </button>
        </form>

        <p className="signup-footer-text">
          Already have an account?{" "}
          <span className="login-link" onClick={handleLoginClick}>
            Login here
          </span>
        </p>

        {error ? <p className="signup-error">Please fill all fields</p> : null}
      </div>
    </div>
  );
};

export default SignupPage;
