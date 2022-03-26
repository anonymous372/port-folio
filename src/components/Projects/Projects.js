import React from 'react';
import "./Projects.css"

import Project from './Project/Project';

const projectData = [
    {
        name: "YelpCamp",
        code_link: "https://github.com/anonymous372/YelpCamp",
        live_link: "https://yelpcamp-anonymous372.herokuapp.com/",
        desc: "",
        img: "/yelp.png",
        vid: "/"
    },
    {
        name: "Blog App",
        code_link: "https://github.com/anonymous372/Blog-App",
        live_link: "https://blogapp-anonymous372.herokuapp.com/",
        desc: "",
        img: "/blog.png",
        vid: "/"
    },
    {
        name: "Holdlinfo Clone",
        code_link: "https://github.com/anonymous372/Holdlinfo",
        live_link: "https://holdlinfo-clone.herokuapp.com/",
        desc: "",
        img: "/holdlin.png",
        vid: "/"
    },
    {
        name: "Sorting Visualizer",
        code_link: "https://github.com/anonymous372/Sorting-Visualizer",
        live_link: "https://anonymous372.github.io/Sorting-Visualizer/",
        desc: "",
        img: "/sort.png",
        vid: "/"
    },
    {
        name: "Sample Website",
        code_link: "https://github.com/anonymous372/Sample-Website",
        live_link: "https://anonymous372.github.io/Sample-Website/",
        desc: "",
        img: "/sample.png",
        vid: "/"
    }

]

const Projects = () => {
    return(
        <div id='projects'>
            <h1>My projects</h1>
            <div id="projects-cont">
                {projectData.map((data,idx)=>
                    <Project key={idx} data={data}/>
                )}
            </div>
        </div>
    )
}

export default Projects