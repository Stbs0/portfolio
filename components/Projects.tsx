import { PROJECTS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
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
      className='w-full h-full'
      href={url}
      rel='noopener noreferrer'
      target='_blank'>
      <div className='flex-row flex  justify-start'>
        <Image
          src={image}
          height={50}
          width={150}
          // Make the image display full width

          className='dark:bg-neutral-200 rounded-md  h-auto'
          alt='Mohammed Mahmoud - UX Design Project'
        />
        <div className='p-3'>
          <p className='dark:text-white font-semibold text-xl'>{title}</p>
          <p className='dark:text-gray-500 text-[10px]'>{description}</p>
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC<{}> = () => {
  return (
    <section id='projects'>
      <h2 className='text-white font-semibold text-center text-6xl pt-[35px]'>
        PROJECTS
      </h2>
      <p className=' tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl '>
        EXPLORE NOW
      </p>
      <div className='   container mx-auto 2xl  '>
        {PROJECTS.map((project, index) => (
          //  FIX: some websites are not working
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
