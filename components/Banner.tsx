import React from "react";
import { BANNER } from "@/constant";
import { Careers } from "@/app/[career]/page";

import PageSwitcher from "./CareerSwitcher";
import { isDeveloper } from "@/lib/utils";
import ContactMeBtn from "./ContactMeBtn";
import { MapPin } from "lucide-react";
const Banner = ({ career }: { career: Careers }) => {
  return (
    <section className="mt-[100px] flex flex-row items-center justify-center px-20">
      <div className="flex flex-col justify-center text-center">
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/me.webp"
            className="h-52 w-52 rounded-full"
            alt="Mohammed Ibrahim Mahamoud"
          />
        </div>

        <h1
          className={` ${
            isDeveloper(career) ? "text-white" : ""
          } mt-10 max-w-[600px] animate-bounce cursor-pointer text-7xl font-semibold tracking-tighter`}
        >
          Mohammed Mahmoud
        </h1>

        <p className="flex items-center justify-center gap-2 font-semibold">
          <MapPin /> <span>Jeddah, Saudi Arabia</span>
        </p>

        <PageSwitcher career={career} />
        <p
          className={`text-md my-5 max-w-[600px] ${
            isDeveloper(career) ? "text-gray-200" : "text-gray-800"
          } `}
        >
          {BANNER[career]}
        </p>
        <div className="text-md flex justify-center">
          <ContactMeBtn career={career} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
