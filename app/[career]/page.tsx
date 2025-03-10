import About from "@/components/About";
import Banner from "@/components/Banner";
import Projects from "@/components/developer/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/pharmacist/Experience";
import References from "@/components/pharmacist/References";
import Skills from "@/components/Skills";
import { ABOUT_ME, CAREERS, SEO_KEYWORDS } from "@/constant";
import { Careers } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { career },
}: {
  params: { career: Careers };
}): Promise<Metadata> {
  return CAREERS.includes(career)
    ? {
        title: career,
        description: ABOUT_ME[career].join(" "),
        keywords: SEO_KEYWORDS[career],
        icons:
          process.env.NODE_ENV === "production"
            ? `/icon-${career}.svg`
            : `http://localhost:3000/icon/icon-${career}.svg`,
      }
    : {
        title: "Page Not Found",
        description: "The page you are looking for does not exist.",
      };
}
export async function generateStaticParams() {
  return CAREERS.map((career) => ({
    career,
  }));
}

export default function Career({ params }: { params: { career: Careers } }) {
  const career = params?.career;

  if (career !== "developer" && career !== "pharmacist") {
    return notFound();
  }
  return (
    <>
      <Banner career={career} />
      <About career={career} />
      <Skills career={career} />
      {career === "pharmacist" ? <Experience career={career} /> : <Projects />}
      {career === "pharmacist" ? <References/> : null}
      <Footer career={career} />
    </>
  );
}
