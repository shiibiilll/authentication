import { useState, useEffect } from "react";
import '../styles/homepage.css';

const HomePage = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Retrieve user data from browser localStorage
    const storedUser = localStorage.getItem("user");

    // Check if user data exist and update email
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setEmail(userData.email);
    }
  }, []);

  return <div className="home-container">{`Welcome ${email}`}</div>;
};

export default HomePage;
