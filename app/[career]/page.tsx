import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { notFound } from "next/navigation";

export enum Careers {
  developer = "developer",
  pharmacist = "pharmacist",
}
export default function Career({ params }: { params: { career: Careers } }) {
  const { career } = params;

  if (career !== "developer" && career !== "pharmacist") {
    return notFound();
  }

  return (
    <main className='h-full w-full '>
      <div className='flex flex-col gap-20'>
        <Banner career={career} />
        <About career={career} />

        {career === "pharmacist" ? <Experience /> : <Projects />}

        <Footer />
      </div>
    </main>
  );
}
