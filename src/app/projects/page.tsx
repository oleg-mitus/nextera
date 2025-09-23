"use client";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { projectsBlocks } from "@/data/projects";

const Projects = () => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 20 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 40 });
  return (
    <div className="projects py-10 lg:px-10 text-center relative">
      <div
        className="w-full absolute inset-0 z-[-1] -top-150 h-full aspect-square"
        ref={line1}
      >
        <Image src="/line-1_1.svg" fill alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] -top-150 h-full aspect-square"
        ref={line2}
      >
        <Image src="/line-1_2.svg" fill alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-150 h-full aspect-square"
        ref={line3}
      >
        <Image src="/line-1_3.svg" fill alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-200 h-full aspect-square"
        ref={line4}
      >
        <Image src="/line-1_4.svg" fill alt="" className="w-full h-auto" />
      </div>
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
