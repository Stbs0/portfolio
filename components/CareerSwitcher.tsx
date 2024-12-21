"use client";

import { Careers } from "@/app/[career]/page";
import { Switch } from "@nextui-org/switch";
import { Binary, Pill } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PageSwitcher({ career }: { career: Careers }) {
  const router = useRouter();
  const [isDeveloper, setIsDeveloper] = useState(career === "developer");

  const handleToggle = (checked: boolean) => {
    setIsDeveloper(checked);
    router.push(checked ? "/developer" : "/pharmacist");
  };

  return (
    <div className='flex items-center justify-center gap-4 p-4  rounded-md '>
      <span className='text-sm font-medium text-gray-600'>Pharmacist</span>
      <Switch
        size='lg'
        isSelected={isDeveloper}
        endContent={<Pill />}
        startContent={<Binary />}
        onChange={(e) => handleToggle(e.target.checked)}
        color='default'
      />
      <span className='text-sm font-medium text-gray-600'>Developer</span>
    </div>
  );
}
