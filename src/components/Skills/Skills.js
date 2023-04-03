import React from "react";
import "./Skills.css";

import {
  FaNodeJs,
  FaDatabase,
  FaReact,
  FaCss3,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import exIcon from "../../images/expressjs.svg";
import { SiRedux, SiJavascript } from "react-icons/si";
const Skills = ({ theme }) => {
  const bgClass = theme === "light" ? "#deeeea" : "#2A2A2A";
  const textClass = theme === "light" ? "#393232" : "#ddd";

  return (
    <div id="skills" style={{ backgroundColor: bgClass }}>
      <h1 style={{ color: textClass }}>Skills</h1>
      <div id="skill-list">
        <div className="skill">
          <FaNodeJs className="icon"></FaNodeJs> Node
        </div>
        <div className="skill">
          <img src={exIcon} className="icon" height="18px" width="18px"></img>{" "}
          Express
        </div>
        <div className="skill">
          <FaDatabase className="icon"></FaDatabase> MongoDB
        </div>
        <div className="skill">
          <FaReact className="icon"></FaReact> ReactJS
        </div>
        <div className="skill">
          <SiRedux className="icon" /> Redux
        </div>
        <div className="skill">
          <FaCss3 className="icon"></FaCss3>{" "}
          <span style={{ fontSize: "16px" }}>TailwindCSS</span>
        </div>
        <div className="skill">
          <SiJavascript className="icon" />{" "}
          <span style={{ fontSize: "18px" }}>JavaScript</span>
        </div>
        <div className="skill">
          <FaGitAlt className="icon" /> Git
        </div>
      </div>
    </div>
  );
};
export default Skills;
