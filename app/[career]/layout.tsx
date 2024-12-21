import { notFound } from "next/navigation";
import React from "react";

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { career: string };
}) => {
  const { career } = params;

  if (career !== "developer" && career !== "pharmacist") {
    return notFound();
  }
  return (
    <main className='h-full w-full px-4 '>
      <div className='flex flex-col gap-20'>
        {children}

       
      </div>
    </main>
  );
};

export default layout;
