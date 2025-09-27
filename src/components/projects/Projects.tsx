"use client";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import ProjectsParallax from "@/components/projects/ProjectsParallax";
import ProjectsMobileParallax from "@/components/projects/ProjectsMobileParallax";
import { useMediaQuery } from "usehooks-ts";
import { projectsBlocks } from "@/data/projects";
import { useState, type MouseEvent } from "react";
import clsx from "clsx";

const Projects = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className={clsx("projects py-10 lg:px-10 text-center relative ")}
      onMouseMove={(event) => handleMouseMove(event)}
    >
      {isSmallDevice ? (
        <ProjectsMobileParallax />
      ) : (
        <ProjectsParallax {...mousePosition} />
      )}
      {projectsBlocks.map((item) => (
        <div
          className="projects-block mt-20 lg:mt-30 font-sans"
          key={item.title}
          data-aos="fade-up"
        >
          <h2 className="text-center text-4xl lg:text-5xl" data-aos="fade-up">
            {item.title}
          </h2>
          <div
            className="text-xl mt-2.5 lg:text-2xl max-w-150 mx-auto"
            data-aos="fade-up"
          >
            {item.description}
          </div>
          <ProjectsSlider items={item.projects} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
