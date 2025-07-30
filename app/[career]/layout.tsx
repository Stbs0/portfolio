import BackgroundImage from "@/components/BackgroundImage";
import { isDeveloper } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

const layout = async (
  props: {
    children: React.ReactNode;
    params: Promise<{ career: string }>;
  }
) => {
  const params = await props.params;

  const {
    children
  } = props;

  const { career } = params;
  const validCareers = ["developer", "pharmacist"];

  if (!validCareers.includes(career)) {
    return notFound();
  }

  return (
    <main
      className={`h-full w-full px-4 ${
        isDeveloper(career)
          ? "*:selection:bg-white/80 *:selection:text-black"
          : "*:selection:bg-black/80 *:selection:text-white"
      } `}
    >
      <div className="flex flex-col gap-20">{children}</div>
      <BackgroundImage career={career} />
    </main>
  );
};

export default layout;
