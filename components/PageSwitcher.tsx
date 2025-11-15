import { Careers } from "@/types";
import { Binary, Pill } from "lucide-react";
import SwitchCareer from "./CareerSwitcher";

export default function PageSwitcher({ career }: { career: Careers }) {
  const isDeveloper = career === "developer";

  return (
    <div className="flex flex-col pt-4">
      <p className={`${isDeveloper ? "text-gray-300" : "text-gray-700"}`}>
        Click on the switch to view the other careers
      </p>
      <div className="flex items-center justify-center gap-4 rounded-md p-4 pt-1">
        <span
          className={`${
            isDeveloper ? "text-gray-300" : "text-gray-700"
          } text-sm font-medium`}
        >
          Developer
        </span>
        <Binary className={`${isDeveloper ? "invert" : ""}`} />
        <SwitchCareer career={career} />
        <Pill className={`${isDeveloper ? "invert" : ""}`} />
        <span
          className={`${
            isDeveloper ? "text-gray-300" : "text-gray-700"
          } text-sm font-medium`}
        >
          Pharmacist
        </span>
      </div>
    </div>
  );
}
