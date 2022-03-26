import React from 'react';

import "./Navbar.css"

const Navbar = () => {
    return(
        <div id="navbar">
            <div className="left">
                <a href="#navbar">Sourabh</a>
            </div>
            <div className="right">
                <a href='#projects'>Projects</a>
                <a href='#skills'>Skills</a>
                <a href="#footer">Contact</a>
            </div>
        </div>
    )
}

export default Navbar