import React from "react";
import "./Skills.css";

import { FaNodeJs, FaDatabase, FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import exIcon from "../../images/expressjs.svg";

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
          <FaCss3 className="icon"></FaCss3> CSS
        </div>
        <div className="skill">
          <FaHtml5 className="icon" /> HTML
        </div>
      </div>
    </div>
  );
};
export default Skills;
