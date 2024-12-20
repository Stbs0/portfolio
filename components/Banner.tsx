"use client";
import { Pill } from "lucide-react";
import { Binary } from "lucide-react";

import React from "react";
import Image from "next/image";
import { Switch } from "@nextui-org/switch";
import { BANNER } from "@/constant";
import { Careers } from "@/app/[career]/page";
import { redirect } from "next/navigation";
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

        <h1 className='flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto '>
          Mohammed Mahmoud
        </h1>
        <div className='flex justify-center'>
          <p className='text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]'>
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
        <div className='flex justify-center'>
          <Switch
            defaultSelected
            color='primary'
            endContent={<Pill />}
            size='lg'
            checked={career === "developer"}
            onValueChange={(e) => {
              redirect(
                `/${career === "developer" ? "pharmacist" : "developer"}`,
              );
            }}
            startContent={<Binary />}></Switch>
        </div>

        <p className='text-md text-gray-200 my-5 max-w-[600px]'>
          {BANNER[career]}
        </p>
        <div className='text-md flex justify-center'>
          <button
            onClick={() => window.open("mailto:mohammedjrt@gmail.com")}
            className=' z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent '>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
