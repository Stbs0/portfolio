import { PROJECTS } from "@/constant";
import Image from "next/image";
import React from "react";

const Project = ({
  title,
  url,
  image,
  description,
}: {
  title: string;
  url: string;
  image: string;
  description: string;
}) => {
  return (
    <a
      className="h-full w-full"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex flex-row justify-start">
        <Image
          src={image}
          height={30}
          width={170}
          // Make the image display full width

          className="h-auto rounded-md bg-slate-300/50 p-2"
          alt="Mohammed Mahmoud - UX Design Project"
        />
        <div className="p-3">
          <p className="text-xl font-semibold dark:text-white">{title}</p>
          <p className="text-[10px] dark:text-gray-500">{description}</p>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="pt-[35px] text-center text-6xl font-semibold text-white">
        PROJECTS
      </h2>
      <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text pb-5 text-center font-light tracking-[0.5em] text-transparent">
        EXPLORE NOW
      </p>
      <div className="container mx-auto flex flex-col gap-5">
        {PROJECTS.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            url={project.url}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
