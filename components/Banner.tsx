
import React from "react";
import Image from "next/image";
import { BANNER } from "@/constant";
import { Careers } from "@/app/[career]/page";

import PageSwitcher from "./CareerSwitcher";
import { isDeveloper } from "@/lib/utils";
import ContactMeBtn from "./ContactMeBtn";
const Banner = ({ career }: { career: Careers }) => {
  return (
    <section className='flex flex-row items-center justify-center px-20 mt-[100px] z-[20] '>
      <div className='flex flex-col  justify-center  text-center'>
        <div className='justify-center flex '>
          <Image
            priority
            src='/me.webp'
            height={250}
            width={250}
            className=' rounded-full '
            alt='Mohammed Ibrahim Mahamoud'
            
          />
        </div>

        <h1
          className={`flex flex-col ${
            isDeveloper(career) ? "text-white" : ""
          }  gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold  max-w-[600px] w-auto h-auto `}>
          Mohammed Mahmoud
        </h1>
        <div className='flex justify-center'>
          <p
            className={`text-2xl font-medium tracking-tighter ${
              isDeveloper(career) ? "text-gray-300" : "text-gray-700"
            }   max-w-[600px]`}>
            I do Code &{" "}
            <span className='text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400'>
              Chill
            </span>
          </p>
          <Image
            src='/popcorn.gif'
            height={50}
            width={50}
            alt='popcorn gif'
          />
        </div>

        <PageSwitcher career={career} />
        <p
          className={`text-md  my-5 max-w-[600px] ${
            isDeveloper(career) ? "text-gray-200" : "text-gray-800"
          } `}>
          {BANNER[career]}
        </p>
        <div className='text-md flex justify-center'>
          <ContactMeBtn career={career} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
