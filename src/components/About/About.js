import React,{useEffect,useState} from 'react';
import "./About.css"

import myImg from "../../images/me_sourabh_bg.png"

const About = () => {
    const [flag,setFlag] = useState(true) 
    
    useEffect(() => {
        setFlag(false)
    })
    if(flag){
        return <h1>Loading...</h1>
    }
    else{
        return(
            <div id="about">
                <img id="my_img" src="./me_sourabh_bg.png"/>
                <div id="about-txt">
                    Hi, I am <span>Sourabh Shukla</span>. I am currently doing
                    my BSc(H) Computer Science from Delhi University.
                    I am interested in Web Development using <span>MEARN</span> stack.
                    I also love doing Competitive Programming.
                </div>
            </div>
        )
    }
} 
export default About
