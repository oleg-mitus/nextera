"use client";
import Image, { StaticImageData } from "next/image";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import ProjectParallax from "@/components/projects/ProjectParallax";
import ProjectMobileParallax from "@/components/projects/ProjectMobileParallax";
import { useMediaQuery } from "usehooks-ts";
import { projectsBlocks } from "@/data/projects";
import { FC, useEffect, useState, type MouseEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import projectImage from "@/../public/project.png";

interface ProjectItem {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
}

const Project: FC<{ project: ProjectItem }> = ({ project }) => {
  const projects = projectsBlocks[2].projects;
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
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="project lg:px-10 py-10 relative"
      onMouseMove={(event) => handleMouseMove(event)}
    >
      {isSmallDevice ? (
        <ProjectMobileParallax />
      ) : (
        <ProjectParallax {...mousePosition} />
      )}
      <h1
        className="text-4xl lg:text-5xl 2xl:text-7xl font-sans px-4 lg:px-0"
        data-aos="fade-up"
      >
        {project.name}
      </h1>
      <div
        className="aspect-[16/9] relative mx-auto max-w-400 mt-10 lg:mt-25"
        data-aos="zoom-in"
      >
        <Image
          src={projectImage}
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="project-description mt-10 lg:mt-25 px-4 lg:px-0">
        <h2
          className="text-3xl lg:text-4xl 2xl:text-5xl font-sans"
          data-aos="fade-up"
        >
          О проекте
        </h2>
        <div
          className="lg:ml-40 mt-10 max-w-250 text-lg lg:text-xl 2xl:text-2xl flex flex-col gap-5 lg:gap-8"
          data-aos="fade-down"
        >
          <p>
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы Много какой-то важной инфы
          </p>
          <p>
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы Много какой-то важной инфы Много какой-то важной инфы
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы
          </p>
          <p>
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы Много какой-то важной инфы Много какой-то важной инфы
            Много какой-то важной инфы
          </p>
        </div>
      </div>
      <div className="project-description mt-10 lg:mt-25 px-4 lg:px-0">
        <h2
          className="text-3xl lg:text-4xl 2xl:text-5xl font-sans"
          data-aos="fade-up"
        >
          Подробнее
        </h2>
        <div
          className="lg:ml-40 mt-10 max-w-250 text-lg lg:text-xl 2xl:text-2xl flex flex-col gap-5 lg:gap-8"
          data-aos="fade-down"
        >
          <p>
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы Много какой-то важной инфы
          </p>
          <p>
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы Много какой-то важной инфы Много какой-то важной инфы
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы
          </p>
          <p>
            Много какой-то важной инфы Много какой-то важной инфы Много какой-то
            важной инфы Много какой-то важной инфы Много какой-то важной инфы
            Много какой-то важной инфы
          </p>
        </div>
      </div>
      <div className="project-description mt-10 lg:mt-25 px-4 lg:px-0">
        <h2
          className="text-3xl lg:text-4xl 2xl:text-5xl font-sans"
          data-aos="fade-up"
        >
          Съемочная группа
        </h2>
        <div
          className="mt-10 text-lg lg:text-xl 2xl:text-2xl flex flex-col gap-8 lg:items-center"
          data-aos="fade-down"
        >
          <div className="flex lg:justify-center flex-col gap-5">
            <div className="flex gap-10">
              <div>Lorem Ipsum</div>
              <div>Режиссер</div>
            </div>
            <div className="flex gap-10">
              <div>Lorem Ipsum</div>
              <div>Режиссер</div>
            </div>
            <div className="flex gap-10">
              <div>Lorem Ipsum</div>
              <div>Режиссер</div>
            </div>
            <div className="flex gap-10">
              <div>Lorem Ipsum</div>
              <div>Режиссер</div>
            </div>
            <div className="flex gap-10">
              <div>Lorem Ipsum</div>
              <div>Режиссер</div>
            </div>
            <div className="flex gap-10">
              <div>Lorem Ipsum</div>
              <div>Режиссер</div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-other mt-10 lg:mt-25 lg:mb-25">
        <h2
          className="text-3xl lg:text-4xl 2xl:text-5xl font-sans px-4 lg:px-0 mb-10"
          data-aos="fade-up"
        >
          Наши последнии работы
        </h2>
        <div data-aos="zoom-in">
          <ProjectsSlider items={projects} />
        </div>
      </div>
    </div>
  );
};

export default Project;
