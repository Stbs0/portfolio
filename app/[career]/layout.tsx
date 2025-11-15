import BackgroundImage from "@/components/BackgroundImage";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { isDeveloper } from "@/lib/utils";
import { Careers } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

export default async function layout(props: {
  children: React.ReactNode;
  params: Promise<{ career: Careers }>;
}) {
  const params = await props.params;

  const { children } = props;

  const { career } = params;
  const validCareers = ["developer", "pharmacist"];

  if (!validCareers.includes(career)) {
    return notFound();
  }

  return (
    <>
      <StarsCanvas />
      <BackgroundImage career={career} />
      <Navbar career={career} />
      <main
        className={`h-full w-full px-4 ${
          isDeveloper(career)
            ? "*:selection:bg-white/80 *:selection:text-black"
            : "*:selection:bg-black/80 *:selection:text-white"
        } `}
      >
        <div className="flex flex-col gap-20">{children}</div>
      </main>
    </>
  );
}
