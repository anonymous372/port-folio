import React from 'react';
import "./Projects.css"

import Project from './Project/Project';

import img1 from "../../images/yelp.png"
import img2 from "../../images/blog.png"
import img3 from "../../images/holdlin.png"
import img4 from "../../images/sort.png"
import img5 from "../../images/sample.png"

const projectData = [
    {
        name: "YelpCamp",
        code_link: "https://github.com/anonymous372/YelpCamp",
        live_link: "https://yelpcamp-anonymous372.herokuapp.com/",
        desc: "This is a community site for CAMPERS. You can create your account, create or update your camprounds. Read about others camprounds and comment on them",
        img: img1,
        vid: "/"
    },
    {
        name: "Blog App",
        code_link: "https://github.com/anonymous372/Blog-App",
        live_link: "https://blogapp-anonymous372.herokuapp.com/",
        desc: "This is a Blog App where you can Create, Read, Update and Delete a blog. Beautiful and Responsive Web Design",
        img: img2,
        vid: "/"
    },
    {
        name: "Holdlinfo Clone",
        code_link: "https://github.com/anonymous372/Holdlinfo",
        live_link: "https://holdlinfo-clone.herokuapp.com/",
        desc: "This is a clone of site Holdlinfo.com. Here you can get current value of some of the famous cryptocurrencies. I have used the WazirX APi to fetch data",
        img: img3,
        vid: "/"
    },
    {
        name: "Sorting Visualizer",
        code_link: "https://github.com/anonymous372/Sorting-Visualizer",
        live_link: "https://anonymous372.github.io/Sorting-Visualizer/",
        desc: "This is a Simple Project where you can see sorting happen right before your eyes. Choose between some of the famous sorting algorithms, change the speed or number of elements & Play with it!",
        img: img4,
        vid: "/"
    },
    {
        name: "Sample Website",
        code_link: "https://github.com/anonymous372/Sample-Website",
        live_link: "https://anonymous372.github.io/Sample-Website/",
        desc: "This is a Sample Website created using just the HTML,CSS and JS",
        img: img5,
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