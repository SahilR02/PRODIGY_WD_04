import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub} from "react-icons/fa"
import { Link } from "react-router-dom"

import "./ContactContent.css";


const ContactContent = () => {
  return (
    <div className='connect'>
      <h1>Connect with me on...</h1>
      <p><FaPhone size={25} style={{color: "white", marginRight: "1rem"}}/>+919975495497</p>
      <p><FaLinkedin size={25} style={{color: "white", marginRight: "1rem"}}/> <Link to="https://www.linkedin.com/in/sahil-ramchandani-022393281" target='_blank'>LinkedIn.com/in/sahil-ramchandani-022393281</Link></p>
            <p><FaMailBulk size={25} style={{color: "white", marginRight: "1rem"}}/>sahilramchandani14@gmail.com</p>
            <p><FaGithub size={25} style={{color: "white", marginRight: "1rem"}}/><Link to="https://github.com/SahilR02" target='_blank'>GitHub.com/SahilR02</Link></p>
            <p><FaTwitter size={25} style={{color: "white", marginRight: "1rem"}}/><Link to="https://twitter.com/SahilR02" target='_blank'>@SahilR02</Link></p>
            <p><FaInstagram size={25} style={{color: "white", marginRight: "1rem"}}/><Link to="https://instagram.com/sahilr02?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>sahilr02</Link></p>            
    </div>
  )
}

export default ContactContent
