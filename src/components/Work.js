import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="proj-head">Projects.</h1>
        <div className="proj-container">
            {WorkCardData.map((val, ind) => {
                return(
                    <WorkCard 
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    source = {val.source}
                    />
                )
            })}
        </div>
      
    </div>
  )
}

export default Work
