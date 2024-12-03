import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      {to.charAt(1).toUpperCase() + to.slice(2).replace("-", " ")}
    </NavLink>
  );
};

export default MenuItem;
