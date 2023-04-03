import React, { useEffect, useState } from "react";
import "./About.css";

import myImg from "../../images/me_sourabh_bg.webp";

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
              Hi, I am <span>Sourabh Shukla</span>.
            </div>
            I am currently doing my BSc(H) Computer Science from Delhi
            University. I am interested in Software Development using{" "}
            <span>MERN</span> stack. I also love doing Competitive Programming.
          </div>
        </div>
        <img id="my_img" src={myImg} style={imgClass} />
      </div>
    );
  }
};
export default About;
