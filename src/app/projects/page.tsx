"use client";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import ProjectsParallax from "@/components/projects/ProjectsParallax";
import ProjectsMobileParallax from "@/components/projects/ProjectsMobileParallax";
import { useMediaQuery } from "@uidotdev/usehooks";
import { projectsBlocks } from "@/data/projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {

  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="projects py-10 lg:px-10 text-center relative">
      {isSmallDevice ? <ProjectsMobileParallax /> : <ProjectsParallax />}
      <h1
        className="text-center text-5xl lg:text-7xl font-sans"
        data-aos="zoom-out-down"
      >
        Проекты
      </h1>
      {projectsBlocks.map((item) => (
        <div
          className="projects-block mt-25 lg:mt-50 font-sans"
          key={item.title}
          data-aos="zoom-in-up"
        >
          <h2
            className="text-center text-4xl lg:text-5xl"
            data-aos="zoom-out-left"
          >
            {item.title}
          </h2>
          <div className="text-xl mt-2.5 lg:text-2xl" data-aos="zoom-out-left">
            {item.description}
          </div>
          <ProjectsSlider items={item.projects} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
