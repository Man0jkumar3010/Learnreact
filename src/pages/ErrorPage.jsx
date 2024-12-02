
import { NavLink } from "react-router-dom";
import "../styles/error.css";
import errorGif from '../Images/error.gif'

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={errorGif} alt="Error Illustration" className="error-gif" />
      <p className="error-message">We couldn't find what you were looking for.</p>
      <NavLink to="/" className="error-link">
        Back to home page
      </NavLink>
    </div>
  );
};
