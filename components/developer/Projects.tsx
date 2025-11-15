import { PROJECTS } from "@/constant";
import Image from "next/image";

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
      className="flex h-full w-full"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={image}
        width={64}
        height={64}
        className="size-16 rounded-md bg-white/90 object-contain p-1"
        alt={title}
      />
      <div className="p-3">
        <p className="text-xl font-semibold text-white">{title}</p>
        <p className="text-[10px] text-white/70">{description}</p>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto">
      <h2 className="big-texts text-center font-semibold text-white">
        PROJECTS
      </h2>
      <p className="text-1xl bg-linear-to-r from-purple-700 to-orange-500 bg-clip-text pb-5 text-center font-light tracking-[0.5em] text-transparent">
        EXPLORE NOW
      </p>
      <div className="flex flex-col justify-center gap-5">
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
