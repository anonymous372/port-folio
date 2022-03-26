import React from 'react';
import "./Footer.css"

import {FaGithub, FaLinkedin, FaEnvelopeSquare} from "react-icons/fa"

function handleClick(link){
    window.location = link
}

const Footer = () => {
    return(
        <div id="footer">
            <h3>Contacts</h3>
            <div className="contacts">
                <FaGithub onClick={() => handleClick("https://github.com/anonymous372")} className='icon'/>
                <FaLinkedin onClick={() => handleClick("https://linkedin.com/")} className='icon'/>
                <FaEnvelopeSquare onClick={() => handleClick("https://mail.google.com/mail/u/0/?fs=1&to=inter.sourabh@example.com")}className='icon'/>
            </div>
        </div>
    )
}
export default Footer
