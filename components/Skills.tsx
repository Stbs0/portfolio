import { SKILLS } from "@/constant";
import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const Skills = ({ career }: { career: Careers }) => {
  return (
    <section id="skills" className="container mx-auto">
      <h2
        className={`${
          isDeveloper(career) ? "text-white" : ""
        } big-texts text-center font-semibold`}
      >
        {isDeveloper(career) ? "TECH STACK" : "COMPETENCIES"}
      </h2>

      <Accordion
        orientation="vertical"
        className={`flex flex-col items-center gap-4 pt-4 *:text-white ${
          isDeveloper(career) ? "invert" : ""
        }`}
        type="single"
        collapsible
      >
        {SKILLS[career].map((skill) => (
          <AccordionItem
            value={skill.name}
            key={skill.name}
            className="w-[300px] rounded-2xl bg-black/80 p-4 sm:w-[500px] lg:w-[600px]"
          >
            <AccordionTrigger className="outline-hidden">
              <div className="flex items-center gap-4">
                <skill.Icon className="h-10 w-10 rounded-large bg-white p-2 text-black" />
                <div>
                  <p>{skill.name}</p>
                  <p className="text-xs font-light text-gray-300/80">
                    {skill.description}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {skill.skills.map((skill) => (
                <Button
                  key={skill}
                  className="h-auto cursor-pointer text-balance rounded-lg bg-white/80 text-center text-black hover:bg-white/90"
                >
                  {skill}
                </Button>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Skills;
