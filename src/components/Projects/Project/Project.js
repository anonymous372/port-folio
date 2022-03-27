import React,{useEffect,useState} from 'react';
import "./Project.css"

import {FaPlay, FaCode} from "react-icons/fa"
const Project = ({data}) => {

    return(
        <div className='project' >
            <h2>{data.name}</h2>
            <img src={data.img} />
            <div className='info'>
                <p>{data.desc}</p>
                <div id="btn-cont">
                    <a className="link-btn" href={data.code_link}><FaCode /></a>
                    <a className="link-btn" href={data.live_link}><FaPlay /></a>
                </div>
            </div>
        </div>
    )
}
export default Project