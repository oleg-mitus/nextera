"use client";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import ProjectsParallax from "@/components/projects/ProjectsParallax";
import ProjectsMobileParallax from "@/components/projects/ProjectsMobileParallax";
import { useMediaQuery } from "usehooks-ts";
import { projectsBlocks } from "@/data/projects";
import { useEffect, useState, type MouseEvent } from "react";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#17292d] z-1">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
    </div>
  );
};

const Projects = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {contentVisible ? (
        <div
          className={clsx(
            "projects py-10 lg:px-10 text-center relative ",
          )}
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
              <h2
                className="text-center text-4xl lg:text-5xl"
                data-aos="fade-up"
              >
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Projects;
