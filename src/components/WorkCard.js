import "./WorkCard.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="proj-card">
    <img src={props.imgsrc} alt="Image" />
    <h2 className="proj-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view} target="_blank" className="btn">View</NavLink>
            <NavLink to={props.source} target="_blank" className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
