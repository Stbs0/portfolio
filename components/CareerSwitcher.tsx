"use client";
import { Careers } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Switch } from "./ui/switch";

export default function SwitchCareer({ career }: { career: Careers }) {
  const router = useRouter();
  const [isDeveloper, setIsDeveloper] = useState(career === "developer");

  const handleToggle = (checked: boolean) => {
    setIsDeveloper(checked);
    router.push(checked ? "/developer" : "/pharmacist", { scroll: false });
  };

  return (
    <Switch
      checked={isDeveloper}
      onCheckedChange={handleToggle}
      // size="lg"
      // className=""
      // isSelected={isDeveloper}
      // endContent={<Pill />}
      // startContent={<Binary />}
      // onChange={(e) => handleToggle(e.target.checked)}
      // color="default"
    />
  );
}
