import { EXPERIENCES } from "@/constant";
import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";
import Image from "next/image";

const Job = ({
  job,
  company,
  img,
  location,
  startDate,
  endDate,
  responsibility,
}: {
  job: string;
  company: string;
  location: string;
  startDate: string;
  img: string;
  endDate: string;
  responsibility: string[];
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 md:flex-row">
        <Image
          src={img}
          width={64}
          height={64}
          className="object-contain"
          alt={job}
        />
        <div className="flex flex-col justify-center *:text-left">
          <p className={`text-black`}>
            <span className="font-semibold">{company} </span>/ {job}
          </p>
          <p className="w-full text-black md:pt-0">
            {startDate} - {endDate} / {location}
          </p>
        </div>
      </div>
      <ol className="dark:text-black-300 flex list-disc flex-col gap-2 pl-20">
        {responsibility.map((responsibility, index) => (
          <li className="text-pretty text-black" key={index}>
            {responsibility}
          </li>
        ))}
      </ol>
    </div>
  );
};

const Experience = ({ career }: { career: Careers }) => {
  return (
    <section id="experience" className="container mx-auto">
      <h2
        className={`${
          isDeveloper(career) ? "text-white" : ""
        } big-texts pt-[35px] text-center font-semibold`}
      >
        EXPERIENCE
      </h2>
      <p className="text-1xl bg-linear-to-r from-purple-700 to-orange-500 bg-clip-text pb-5 text-center font-light tracking-[0.5em] text-transparent">
        EXPLORE NOW
      </p>
      <div className="flex flex-col gap-6">
        {EXPERIENCES.map((experience, index) => (
          <Job key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
