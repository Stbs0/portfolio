"use client";

import { isDeveloper } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { career } = useParams();
  return (
    <header
      className={`w-full h-[65px] ${
        isDeveloper(career as string) ? "text-white bg-['#111']" : ""
      }  fixed backdrop-blur-sm z-50 px-10`}>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <Link
          title='Mohammed Mahmoud logo'
          href='/'
          className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/signature.png'
            alt='Mohammed Mahmoud - Developer / Pharmacist'
            width={60}
            height={100}
            className={`
            ${isDeveloper(career as string) ? " invert" : "  "}
            `}
          />
        </Link>

        <div className='flex flex-row gap-5'>
          <div
            onClick={() => window.open("mailto:mohammedjrt@gmail.com")}
            className={` z-[1] bg-transparent  padding-10 cursor-pointer   rounded-xl    py-2 px-5 ${
              isDeveloper(career as string)
                ? "text-white hover:bg-[#2E2E2E]"
                : "hover:bg-[#2E2E2E] hover:text-white"
            } `}>
            Contact
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
