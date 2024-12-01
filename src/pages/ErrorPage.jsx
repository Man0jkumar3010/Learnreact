import { NavLink } from "react-router-dom";

// components/ErrorPage.js
export const ErrorPage = () => {
    return (
      <div>
        <h1>Oops! Page not found.</h1>
        <p>We couldn't find what you were looking for.</p>
        <NavLink to="/">Back to home page</NavLink>
      </div>
    );
  };
  
 