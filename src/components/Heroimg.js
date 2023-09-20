import "./Hero.css";
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hey, I'm </p>
        <h1>Sahil Ramchandani.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>

        </div>
      </div>
    </div>
  )
}

export default Heroimg
