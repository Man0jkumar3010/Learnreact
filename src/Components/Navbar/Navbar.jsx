import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuItem from "./MenuItem"; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleMenuToggle}>
        <FaBars />
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["/", "/products", "/contacts", "/conditional", "/add-task", "/use-ref", "/controlled", "/use-effect"].map((path) => (
          <MenuItem key={path} to={path} />
        ))}

        <div className={`dropdown ${menuOpen ? "open" : ""}`}>
          {[
            "/temperature-converter",
            "/list",
            "/event-handling",
            "/composition",
            "/lifecycle",
            "/state-object",
            "/state-array",
            "/forward-ref",
            "/test",
            "/customhook",
            "/callback",
            "/usecontext",
            "/usememo",
          ].map((path) => (
            <MenuItem key={path} to={path} />
          ))}
        </div>
      </div>
    </nav>
  );
};

