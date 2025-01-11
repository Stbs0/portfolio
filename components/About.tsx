import { ABOUT_ME } from "@/constant";
import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";

const About = ({ career }: { career: Careers }) => {
  console.log(career);
  return (
    <section
      id="about"
      className="relative flex h-full flex-col items-center justify-center overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex max-w-[900px] flex-col flex-wrap items-center justify-around">
        <h1
          className={`${
            isDeveloper(career) ? "text-white" : ""
          } text-6xl font-semibold`}
        >
          ABOUT ME
        </h1>

        <div className="space-y-4 pt-4 text-center">
          {ABOUT_ME[career].map((paragraph, index) => (
            <p
              className={`text-balance ${
                isDeveloper(career) ? "text-gray-300" : "text-black"
              } `}
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
