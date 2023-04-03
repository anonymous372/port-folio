import React, { useEffect, useState } from "react";
import "./Project.css";

import { FaPlay, FaCode } from "react-icons/fa";
const Project = ({ data }) => {
  return (
    <div className="project">
      <h2>{data.name}</h2>
      <img src={data.img} />
      <div className="info">
        <p>{data.desc}</p>
        <div id="btn-cont">
          <a className="link-btn" target="_blank" href={data.code_link}>
            <FaCode />
          </a>
          <a
            className="link-btn"
            target="_blank"
            href={data.live_link}
            onClick={(e) => {
              if (data.live_link === "") {
                e.preventDefault();
              }
            }}
          >
            <FaPlay />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
