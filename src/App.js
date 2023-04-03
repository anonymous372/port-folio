import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");
  const backgroundClass = theme === "light" ? "#f0f0f0" : "#202020";
  useEffect(() => {
    // fetch theme from local storage
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  return (
    <div id="app" style={{ backgroundColor: backgroundClass }}>
      <Navbar setTheme={setTheme} theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
