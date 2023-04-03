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

  function styleNavbar() {
    var navElement = document.querySelector("#navbar");
    // change opacity on this.scrollY in 5 stages separated by 150px
    if (window.scrollY < 150) {
      navElement.style.opacity = 1;
    }
    if (window.scrollY >= 150 && window.scrollY < 300) {
      navElement.style.opacity = 0.9;
    }
    if (window.scrollY >= 300 && window.scrollY < 450) {
      navElement.style.opacity = 0.8;
    }
    if (window.scrollY >= 450 && window.scrollY < 600) {
      navElement.style.opacity = 0.7;
    }
    if (window.scrollY >= 600) {
      navElement.style.opacity = 0.5;
    }
  }
  window.addEventListener("scroll", styleNavbar, false);

  return (
    <div
      id="navbar"
      style={{ backgroundColor: bgClass, boxShadow: shadowClassNav }}
    >
      <div className="left">
        <a href="#navbar" style={{ color: textClass }}>
          Sourabh
        </a>
        {theme === "dark" ? (
          <div
            className="themeBtn mobile"
            onClick={toggleTheme}
            style={{ backgroundColor: bgClass, boxShadow: shadowClassBtn }}
          >
            <FaSun style={{ color: textClass }}></FaSun>
          </div>
        ) : (
          <div
            className="themeBtn mobile"
            onClick={toggleTheme}
            style={{ backgroundColor: bgClass, boxShadow: shadowClassBtn }}
          >
            <FaMoon style={{ color: textClass }}></FaMoon>
          </div>
        )}
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
