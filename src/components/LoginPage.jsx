import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handling submit
  function handleSubmit(e) {
    e.preventDefault();

    // Checking if all fields are filled
    if(!email || !password) {
      setError('Please fill all fields');
      return;
    }

    // Retrieve user data from browser localStorage
    const storedData = JSON.parse(localStorage.getItem("user"));

    // Check if user data exist if not showing error
    if (!storedData) {
      setError("User Not Found");
      return;
    }

    // Comparing new data with stored data
    if (storedData.email === email && storedData.password === password) {
      localStorage.setItem("isLoggedIn", true);

      setError("");

      window.location.href = '/';

    } else {
      setError("Invalid Credentials");
    }
  }

  // If user not have account then navigate to signup page
  function handleSignupClick() {
    navigate("/signup");
  }

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <div className="login-title-container">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Login to your account</p>
        </div>
        <form className="login-input-container" onSubmit={handleSubmit}>
          <p className="login-input-title">Email Address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="login-input-section"
          />

          <p className="login-input-title">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a Password"
            className="login-input-section"
          />

          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        <p className="login-footer-text">
          Don't have an account?{" "}
          <span className="signup-link" onClick={handleSignupClick}>
            Signup
          </span>
        </p>

        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
