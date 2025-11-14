import { BANNER } from "@/constant";

import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";
import { MapPin } from "lucide-react";
import Image from "next/image";
import PageSwitcher from "./CareerSwitcher";
import ContactMeBtn from "./ContactMeBtn";
const Banner = ({ career }: { career: Careers }) => {
  return (
    <section className="container mx-auto mt-[100px] flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <Image
          src="/me.webp"
          width={200}
          height={200}
          className="rounded-full"
          priority
          alt="Mohammed Ibrahim Mahamoud"
        />
      </div>

      <h1
        className={` ${
          isDeveloper(career) ? "text-white" : ""
        } big-texts mt-10 animate-bounce cursor-pointer font-semibold tracking-tighter`}
      >
        Mohammed Mahmoud
      </h1>

      {/* <p
        className={`flex items-center justify-center gap-2 font-semibold ${isDeveloper(career) ? "text-gray-200" : "text-gray-800"}`}
      >
        <MapPin /> <span>Jeddah, Saudi Arabia</span>
      </p><p
        className={`text-md my-5 max-w-[600px] text-center ${
          isDeveloper(career) ? "text-gray-200" : "text-gray-800"
        } `}
      >
        {BANNER[career]}
      </p>

      <PageSwitcher career={career} /> */}
      {/* <p
        className={`text-md my-5 max-w-[600px] text-center ${
          isDeveloper(career) ? "text-gray-200" : "text-gray-800"
        } `}
      >
        {BANNER[career]}
      </p> */}
      {/* <div className="text-md flex justify-center">
        <ContactMeBtn career={career} />
      </div> */}
    </section>
  );
};

export default Banner;
