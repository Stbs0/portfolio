import { Careers } from "@/app/[career]/page";
import { SKILLS } from "@/constant";
import { isDeveloper } from "@/lib/utils";
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
      <h1
        className={`${
          isDeveloper(career) ? "text-white" : ""
        } text-center text-6xl font-semibold`}
      >
        {isDeveloper(career) ? "TECH STACK" : "COMPETENCIES"}
      </h1>

      <Accordion
        orientation="vertical"
        className="flex flex-col items-center gap-4 pt-4 *:text-white"
        type="single"
        collapsible
      >
        {SKILLS[career].map((skill) => (
          <AccordionItem
            value={skill.name}
            key={skill.name}
            className="w-[300px] rounded-2xl bg-gray-800/80 p-4 md:w-[400px]"
          >
            <AccordionTrigger className="outline-none">
              <div className="flex items-center gap-4">
                <skill.Icon className="h-10 w-10 rounded-large bg-stone-700 p-2 text-gray-300" />
                <div>
                  <h2>{skill.name}</h2>
                  <p className="text-xs font-light text-gray-300/80">
                    {skill.description}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 gap-2 text-wrap">
              {skill.skills.map((skill) => (
                <Button
                  key={skill}
                  className="h-auto text-wrap bg-gray-600 hover:bg-gray-700"
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
