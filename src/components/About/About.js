import React, { useEffect, useState } from "react";
import "./About.css";

import myImg from "../../images/me_new2.png";

const About = ({ theme }) => {
  const [flag, setFlag] = useState(true);
  const textClass = theme === "light" ? "#393232" : "#ddd";
  const imgClass =
    theme === "light"
      ? { backgroundColor: "#f0f0f0", boxShadow: "0 2px 4px gray" }
      : { backgroundColor: "#181818", boxShadow: "0 2px 8px #888" };
  useEffect(() => {
    setFlag(false);
  });
  if (flag) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div id="about" style={{ color: textClass }}>
        <div id="about-txt">
          <div>
            <div id="about-head-txt">
              Hey there!, its <span>Sourabh Shukla</span> here.
            </div>
            I'm a software engineer with a passion for turning ideas into reality
            Currently pursuing my <span>MCA</span> at <span>NIT Karnataka</span>.
            With solid work experience and knack for different technologies.
            My favorite sport these days is DSA 😉.
          </div>
        </div>
        <img id="my_img" src={myImg} style={imgClass} />
      </div>
    );
  }
};
export default About;
