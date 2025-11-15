
import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ContactMeNav } from "./ContactMeBtn";

const Navbar = ({ career }: { career: Careers }) => {
  const subject = isDeveloper(career as string) ? "Developer" : "Pharmacist";
  const body = "I would like to get in touch with you.";

  return (
    <header
      className={`z-50 h-[65px] w-full ${
        isDeveloper(career as string)
          ? "bg-['#111'] text-white *:selection:bg-white/80 *:selection:text-black"
          : "*:selection:bg-black/80 *:selection:text-white"
      } fixed px-10 backdrop-blur-xs`}
    >
      <div className="m-auto flex h-full w-full flex-row items-center px-[10px]">
        <Link title="Mohammed Mahmoud logo" href="/" className="mr-auto">
          <Image
            width={48}
            src="/others/signature.png"
            alt="Mohammed Mahmoud - Developer / Pharmacist"
            height={48}
            className={`object-contain ${isDeveloper(career as string) ? "invert" : ""} `}
          />
        </Link>

        {career === "pharmacist" && (
          <a
            className=""
            href="/pdf/cv-pharmacist.pdf"
            download={"Mohammed Mahmoud - Pharmacist CV.pdf"}
          >
            <button className="animate-pulse rounded-lg bg-blue-400 px-4 py-2 font-bold text-nowrap text-white hover:bg-blue-600">
              Download CV
            </button>
          </a>
        )}
       <ContactMeNav career={career} />
      </div>
    </header>
  );
};

export default Navbar;
