import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import SignupPage from "./components/SignupPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import "./App.css";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const location = useLocation();

  // Hide navbar for login and signup pages
  const hideNavbar =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {isLoggedIn && !hideNavbar && <Navbar />}

      <Routes>
        // Signup and Login page routes
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        // Home page route
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />

        // Contact page route
        <Route
          path="/contact"
          element={isLoggedIn ? <ContactPage /> : <Navigate to="/login" />}
        />
        
        // Not found page route
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
