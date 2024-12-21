"use client";
import React, { useEffect } from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { isDeveloper } from "@/lib/utils";

const Footer = ({ career }: { career: string }) => {
  return (
    <div className=' container mx-auto 2xl pt-[50px] pb-8 '>
      <div className='pb-10 justify-center flex '>
        {Social_Icons.map((social, index) => {
          return (
            <a
              href={social.link}
              rel='noopener noreferrer'
              target='_blank'
              key={index}
              className='z-[1]'>
              <Image
                src={social.image}
                height={30}
                width={30}
                alt={social.alt}
                sizes='100vw'
                className='mx-5 h-auto '
              />
            </a>
          );
        })}
      </div>
      <p
        className={`${
          isDeveloper(career) ? "text-gray-300" : "text-gray-700"
        }  text-center text-sm`}>
        Created with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
