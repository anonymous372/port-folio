import React,{useEffect,useState} from 'react';
import "./Project.css"


const Project = ({data}) => {

    return(
        <div className='project' >
            <h2>{data.name}</h2>
            <img src={data.img} />
        </div>
    )
}
export default Project