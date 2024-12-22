import React from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import { isDeveloper } from "@/lib/utils";

const Footer = ({ career }: { career: string }) => {
  return (
    <div className=' container mx-auto 2xl pt-[50px] pb-8 '>
      <div
        className={`${
          isDeveloper(career) ? "" : "invert"
        } pb-10 justify-center flex gap-10 `}>
        {Social_Icons.map((social, index) => {
          return (
            <a
              href={social.link}
              rel='noopener noreferrer'
              target='_blank'
              key={index}
              >
              <Image
                src={social.image}
                height={40}
                width={40}
                alt={social.alt}
                
                className='h-auto '
              />
            </a>
          );
        })}
      </div>
      <p
        className={`${
          isDeveloper(career) ? "text-gray-300" : "text-gray-700 "
        }  text-center text-sm`}>
        Created with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
