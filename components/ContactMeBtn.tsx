"use client";
import { isDeveloper } from '@/lib/utils';
import React from 'react'

const ContactMeBtn = ({ career }: { career: string }) => {
  return (
    <button
      onClick={() => window.open("mailto:mohammedjrt@gmail.com")}
      className={` z-[1]     padding-20  ${
        isDeveloper(career)
          ? "text-white hover:bg-white border-white hover:text-black"
          : "hover:bg-black hover:text-white border-black "
      }  rounded-3xl   font-semibold  py-3 px-10  border-[0.1px]  hover:border-transparent `}>
      Contact Me
    </button>
  );
}


export const ContactMeNav = ({ career }: { career: string }) => {
  return (
     <button
            onClick={() => window.open("mailto:mohammedjrt@gmail.com")}
            className={` z-[1] bg-transparent  padding-10 cursor-pointer   rounded-xl    py-2 px-5 ${
              isDeveloper(career as string)
                ? "text-white hover:bg-[#2E2E2E]"
                : "hover:bg-[#e8e8e8]"
            } `}>
            Contact
          </button>
  )
}


export default ContactMeBtn