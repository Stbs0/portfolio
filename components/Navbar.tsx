"use client";

import { isDeveloper } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { career } = useParams();

  const subject = isDeveloper(career as string) ? "Developer" : "Pharmacist";
  const body = "I would like to get in touch with you.";

  return (
    <header
      className={`w-full h-[65px]  ${
        isDeveloper(career as string)
          ? "text-white bg-['#111'] *:selection:text-black *:selection:bg-white/80"
          : "*:selection:text-white *:selection:bg-black/80"
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

        <div className='flex py-2 flex-row gap-5'>
            <a
              href='/pdf/cv-pharmacist.pdf'
              download={"Mohammed Mahmoud - Pharmacist CV.pdf"}>
          <button className="animate-pulse bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Download CV
          </button>
            </a>
          <button
            onClick={() =>
              window.open(
                `mailto:mohammedjrt@gmail.com?subject=${subject}&body=${body}`,
              )
            }
            className={` bg-transparent  padding-10 cursor-pointer   rounded-xl     px-5 ${
              isDeveloper(career as string)
                ? "text-white hover:bg-[#2E2E2E]"
                : "hover:bg-[#2E2E2E] hover:text-white"
            } `}>
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
