import { ABOUT_ME } from "@/constant";
import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";

const About = ({ career }: { career: Careers }) => {
  console.log(career);
  return (
    <section
      id="about"
      className=" container mx-auto relative flex  flex-col items-center justify-center  "

    >

        <h1
          className={`${
            isDeveloper(career) ? "text-white" : ""
          }  font-semibold big-texts`}
        >
          ABOUT ME
        </h1>

        <div className="pt-4 text-balance text-center">
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

    </section>
  );
};

export default About;
