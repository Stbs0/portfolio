import { type Careers } from "@/app/[career]/page";
import { EXPERIENCES } from "@/constant";
import { isDeveloper } from "@/lib/utils";
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
    <div className=' container mx-auto 2xl '>
      <div className='flex md:flex-row  gap-4 pt-5'>
        <Image
          src={img}
          height={60}
          width={60}
          className=' w-max-[60px] '
          alt={"Mohammed Mahmoud - Pharmacy Inter"}
        />
        <div className='flex  items-center *:text-left flex-col '>
          <p className={`text-black  `}>
            <span className='font-semibold'>{company} </span>/ {job}
          </p>
          <p className='text-black md:pt-0 pt-3 w-full '>
            {startDate} - {endDate} / {location}
          </p>
        </div>
      </div>
      <ol className='list-disc dark:text-black-300 pl-20'>
        {responsibility.map((responsibility, index) => (
          <li
            className='text-black pt-5'
            key={index}>
            {responsibility}
          </li>
        ))}
      </ol>
    </div>
  );
};

const Experience = ({ career }: { career: Careers }) => {
  return (
    <section id='experience'>
      <h2
        className={`${
          isDeveloper(career) ? "text-white" : ""
        }  font-semibold text-center text-6xl   pt-[35px]`}>
        EXPERIENCE
      </h2>
      <p className=' tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl '>
        EXPLORE NOW
      </p>
      {EXPERIENCES.map((experience, index) => (
        <Job
          key={index}
          {...experience}
        />
      ))}
    </section>
  );
};

export default Experience;
