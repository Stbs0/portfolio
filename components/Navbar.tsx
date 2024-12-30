"use client";

import { isDeveloper } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { career } = useParams();

  const subject = isDeveloper(career as string) ? "Developer" : "Pharmacist";
  const body = "I would like to get in touch with you.";

  return (
    <header
      className={`h-[65px] z-50 w-full ${
        isDeveloper(career as string)
          ? "bg-['#111'] text-white *:selection:bg-white/80 *:selection:text-black"
          : "*:selection:bg-black/80 *:selection:text-white"
      } fixed px-10 backdrop-blur-sm`}
    >
      <div className="m-auto flex h-full w-full flex-row items-center px-[10px]">
        <Link
          title="Mohammed Mahmoud logo"
          href="/"
          className="mr-auto "
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/others/signature.png"
            alt="Mohammed Mahmoud - Developer / Pharmacist"
            className={`object-contain w-12 ${isDeveloper(career as string) ? "invert" : ""} `}
          />
        </Link>

        {career === "pharmacist" && (
          <a
            className=""
            href="/pdf/cv-pharmacist.pdf"
            download={"Mohammed Mahmoud - Pharmacist CV.pdf"}
          >
            <button className="animate-pulse text-nowrap rounded-lg bg-blue-400 px-4 py-2 font-bold text-white hover:bg-blue-600">
              Download CV
            </button>
          </a>
        )}
        <button
          onClick={() =>
            window.open(
              `mailto:mohammedjrt@gmail.com?subject=${subject}&body=${body}`,
            )
          }
          className={`cursor-pointer ml-2 rounded-xl bg-transparent p-2 px-5 active:scale-95 focus:outline-none ${
            isDeveloper(career as string)
              ? "text-white hover:bg-[#2E2E2E]"
              : "hover:bg-[#2E2E2E] hover:text-white"
          } `}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Navbar;
