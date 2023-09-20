import "./Navbar.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Projects</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="https://drive.google.com/file/d/19es8LgEj8jyr_ZO3wCN7Hrr23Wy2dMEW/view?usp=drive_link" target="_blank">
        <button className="btn-nav btn">Resume</button>
      </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? ( <FaTimes size={20} style={{ color: "#fff"}}/>) : (<FaBars size={20} style={{ color: "#fff"}}/>
)}
       
      </div>
    </div>
  )
}

export default Navbar
