import { EXPERIENCES } from "@/constant";
import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";

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
    <div className="2xl container mx-auto">
      <div className="flex gap-4 pt-5 md:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}

          className="size-16 "
          alt={"Mohammed Mahmoud - Pharmacy Inter"}
        />
        <div className="flex flex-col items-center *:text-left">
          <p className={`text-black`}>
            <span className="font-semibold">{company} </span>/ {job}
          </p>
          <p className="w-full pt-3 text-black md:pt-0">
            {startDate} - {endDate} / {location}
          </p>
        </div>
      </div>
      <ol className="dark:text-black-300 list-disc pl-20">
        {responsibility.map((responsibility, index) => (
          <li className="pt-5 text-pretty text-black" key={index}>
            {responsibility}
          </li>
        ))}
      </ol>
    </div>
  );
};

const Experience = ({ career }: { career: Careers }) => {
  return (
    <section id="experience">
      <h2
        className={`${
          isDeveloper(career) ? "text-white" : ""
        } pt-[35px] text-center big-texts font-semibold `}
      >
        EXPERIENCE
      </h2>
      <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text pb-5 text-center font-light tracking-[0.5em] text-transparent">
        EXPLORE NOW
      </p>
      {EXPERIENCES.map((experience, index) => (
        <Job key={index} {...experience} />
      ))}
    </section>
  );
};

export default Experience;
