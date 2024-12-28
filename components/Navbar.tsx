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
      className={`h-[65px] w-full ${
        isDeveloper(career as string)
          ? "bg-['#111'] text-white *:selection:bg-white/80 *:selection:text-black"
          : "*:selection:bg-black/80 *:selection:text-white"
      } fixed px-10 backdrop-blur-sm`}
    >
      <div className="m-auto flex h-full w-full flex-row items-center px-[10px]">
        <Link
          title="Mohammed Mahmoud logo"
          href="/"
          className="mr-auto flex h-auto w-auto flex-row items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/others/signature.png"
            alt="Mohammed Mahmoud - Developer / Pharmacist"
            className={`h-auto w-16 ${isDeveloper(career as string) ? "invert" : ""} `}
          />
        </Link>

        {career === "pharmacist" && (
          <a
            className="animate-pulse rounded-lg bg-blue-400 px-4 py-2 font-bold text-white hover:bg-blue-600"
            href="/pdf/cv-pharmacist.pdf"
            download={"Mohammed Mahmoud - Pharmacist CV.pdf"}
          >
            <button>Download CV</button>
          </a>
        )}
        <button
          onClick={() =>
            window.open(
              `mailto:mohammedjrt@gmail.com?subject=${subject}&body=${body}`,
            )
          }
          className={`padding-10 cursor-pointer rounded-xl bg-transparent px-5 ${
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
