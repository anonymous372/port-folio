import React,{useEffect,useState} from 'react';
import "./Project.css"

const onProject = (event) => {
    // event.style.color = "red"
    console.log("Mouse over ",event)
}

const Project = ({data}) => {

    return(
        <div className='project' onMouseOver={onProject}>
            <h2>{data.name}</h2>
            <img src={data.img} />
        </div>
    )
}
export default Project