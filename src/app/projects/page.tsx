"use client";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import ProjectsParallax from "@/components/projects/ProjectsParallax";
import { projectsBlocks } from "@/data/projects";
import { useCallback, useState } from "react";

const Projects = () => {
  const [mouseEvent, setMouseEvent] = useState<MouseEvent | null>(null)
  const onMouse = (event : MouseEvent ) => {
    setMouseEvent(event)
  }
  return (
    <div className="projects py-10 lg:px-10 text-center relative" onMouseMove={onMouse}>
      <ProjectsParallax mouseEvent={mouseEvent} />
      <h1 className="text-center text-5xl lg:text-7xl font-sans">Проекты</h1>
      {projectsBlocks.map((item) => (
        <div className="projects-block mt-25 lg:mt-50 font-sans" key={item.title}>
          <h2 className="text-center text-4xl lg:text-5xl">{item.title}</h2>
          <div className="text-xl mt-2.5 lg:text-2xl">{item.description}</div>
          <ProjectsSlider items={item.projects} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
