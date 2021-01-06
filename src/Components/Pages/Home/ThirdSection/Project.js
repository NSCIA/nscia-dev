import React from "react";

function Project(props) {
  return (
    <div
      className="project"
      style={{
        backgroundImage: "url(" + props.projectProps.img + ")",
        // backgroundRepeat: "no-repeat"
      }}
    >
      <h4 className="project-title">{props.projectProps.title}</h4>
      <div className="slider-picker"></div>
      <div className="project-content">
        <h3>{props.projectProps.projectContent}</h3>
        <p>{props.projectProps.projectSubContent}</p>
      </div>
      <div className="project-button">
        <button className="btn">{props.projectProps.buttonContent}</button>
      </div>
    </div>
  );
}

export default Project;
