import { useNavigate } from "react-router-dom";
import "../styles/notFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  function handleBackClick() {
    navigate("/");
  }
  return (
    <div className="notfound-container">
      <div className="notfound-title-container">
        <h1 className="notfound-title">404</h1>

        <h2 className="notfound-subtitle">Page Not Found</h2>
      </div>

      <button onClick={handleBackClick} className="back-button">
        Back to home
      </button>
    </div>
  );
};

export default NotFoundPage;
