import React from 'react'
import Project from './Project'
import projectSlide1 from '../../../../assets/image/projectSlide1.png'

function ProjectSlide() {
  const projectProps = {
    img: projectSlide1,
    title: "Projects",
    projectContent: "MOON SIGHTING",
    projectSubContent: "All you need to know about moon sighting in Nigeria",
    buttonContent: "CHECK UPDATES"
  }
  return (
    <div className="project-slide">
      <Project projectProps={projectProps} />
    </div>
  )
}

export default ProjectSlide
