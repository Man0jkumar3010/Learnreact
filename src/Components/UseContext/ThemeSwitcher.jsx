import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeSwitcher.css"; 

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-container ${theme}`}>
      <h2>{theme === "light" ? "Light Mode" : "Dark Mode"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
