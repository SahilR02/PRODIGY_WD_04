import { Link } from "react-router-dom";
import "./AboutContent.css";



import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <h3>Software Developer.</h3>
        <p>I am a creative developer committed to crafting exceptional, interactive, and intuitive websites that engage users. I possess strong proficiency in UI design, and features based on user feedback. I am eager to explore technologies and constantly strive to improve my technical competency.</p>
        <Link to="https://drive.google.com/file/d/19es8LgEj8jyr_ZO3wCN7Hrr23Wy2dMEW/view?usp=drive_link" target="_blank">
        <button className="btn">Resume</button>
      </Link>
      </div>
    </div>
  )
}

export default AboutContent

