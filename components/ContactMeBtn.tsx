"use client";
import { isDeveloper } from "@/lib/utils";
import React from "react";

const ContactMeBtn = ({ career }: { career: string }) => {
  return (
    <button
      onClick={() => window.open("mailto:mohammedjrt@gmail.com")}
      className={`padding-20 ${
        isDeveloper(career)
          ? "border-white text-white hover:bg-white hover:text-black"
          : "border-black hover:bg-black hover:text-white"
      } rounded-3xl border-[0.1px] px-10 py-3 font-semibold hover:border-transparent`}
    >
      Contact Me
    </button>
  );
};

export const ContactMeNav = ({ career }: { career: string }) => {
  return (
    <button
      onClick={() => window.open("mailto:mohammedjrt@gmail.com")}
      className={`padding-10 cursor-pointer rounded-xl bg-transparent px-5 py-2 ${
        isDeveloper(career as string)
          ? "text-white hover:bg-[#2E2E2E]"
          : "hover:bg-[#e8e8e8]"
      } `}
    >
      Contact
    </button>
  );
};

export default ContactMeBtn;
