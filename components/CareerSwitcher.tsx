"use client";

import { Careers } from "@/types";
import { Switch } from "@nextui-org/switch";
import { Binary, Pill } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PageSwitcher({ career }: { career: Careers }) {
  const router = useRouter();
  const [isDeveloper, setIsDeveloper] = useState(career === "developer");

  const handleToggle = (checked: boolean) => {
    setIsDeveloper(checked);
    router.push(checked ? "/developer" : "/pharmacist", { scroll: false });
  };

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
        <Switch
          size="lg"
          className=""
          isSelected={isDeveloper}
          endContent={<Pill />}
          startContent={<Binary />}
          onChange={(e) => handleToggle(e.target.checked)}
          color="default"
        />
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
