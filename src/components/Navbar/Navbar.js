import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import "./Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  const shadowClassBtn =
    theme === "light"
      ? "0 0 4px rgba(0, 0, 0, 0.5)"
      : "0 0 4px rgba(200, 200, 200, 0.5)";

  const shadowClassNav =
    theme === "light"
      ? "2px 0 6px rgba(0, 0, 0, 0.5)"
      : "2px 0 6px rgba(200, 200, 200, 0.5)";

  const bgClass = theme === "light" ? "#fff" : "#303030";
  const textClass = theme === "light" ? "#393232" : "#ddd";

  return (
    <div
      id="navbar"
      style={{ backgroundColor: bgClass, boxShadow: shadowClassNav }}
    >
      <div className="left">
        <a href="#navbar" style={{ color: textClass }}>
          Sourabh
        </a>
      </div>
      <div className="right">
        <a href="#projects" style={{ color: textClass }}>
          Projects
        </a>
        <a href="#skills" style={{ color: textClass }}>
          Skills
        </a>
        <a href="#footer" style={{ color: textClass }}>
          Contact
        </a>
        {theme === "dark" ? (
          <div
            className="themeBtn"
            onClick={toggleTheme}
            style={{ backgroundColor: bgClass, boxShadow: shadowClassBtn }}
          >
            <FaSun style={{ color: textClass }}></FaSun>
          </div>
        ) : (
          <div
            className="themeBtn"
            onClick={toggleTheme}
            style={{ backgroundColor: bgClass, boxShadow: shadowClassBtn }}
          >
            <FaMoon style={{ color: textClass }}></FaMoon>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
