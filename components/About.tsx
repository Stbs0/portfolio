import { Careers } from "@/app/[career]/page";
import { ABOUT_ME } from "@/constant";
import React from "react";

const About = ({ career }: { career: Careers }) => {
  return (
    <section
      id='about'
      className='flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] '
      style={{ transform: "scale(0.9)" }}>
      <div className='flex flex-col  justify-around flex-wrap items-center   max-w-[900px]'>
        <h1 className='text-white font-semibold text-6xl'>ABOUT ME</h1>
        <p className=' tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl'>
          EXPLORE NOW
        </p>
        <div className='space-y-4 text-center'>
          {ABOUT_ME[career].map((paragraph, index) => (
            <p
              className='text-gray-300  '
              key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
