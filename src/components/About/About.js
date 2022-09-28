import React, { useEffect, useState } from "react";
import "./About.css";

import myImg from "../../images/me_sourabh_bg.png";

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
        <img id="my_img" src={myImg} style={imgClass} />
        <div id="about-txt">
          Hi, I am <span>Sourabh Shukla</span>. I am currently doing my BSc(H)
          Computer Science from Delhi University. I am interested in Web
          Development using <span>MERN</span> stack. I also love doing
          Competitive Programming.
        </div>
      </div>
    );
  }
};
export default About;
