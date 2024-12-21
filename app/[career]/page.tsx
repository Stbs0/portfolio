import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export type Careers = "developer" | "pharmacist";

export default function Career({ params }: { params:  { career: Careers } }) {
  const career = params?.career;

  console.log(career);
  return (
    <>
      <Banner career={career} />
      <About career={career} />
      {career === "pharmacist" ? <Experience career={career} /> : <Projects />} <Footer career={career} />
    </>
  );
}
