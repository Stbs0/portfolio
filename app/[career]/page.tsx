import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { ABOUT_ME, SEO_KEYWORDS } from "@/constant";
import { Metadata } from "next";

export type Careers = "developer" | "pharmacist";

export async function generateMetadata({
  params: { career },
}: {
  params: { career: Careers };
}): Promise<Metadata> {
  return {
    title: career,
    description: ABOUT_ME[career].join(" "),
    keywords: SEO_KEYWORDS[career],
    icons:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_BASE_URL + `/icon-${career}.png`
        : `http://localhost:3000/icon/icon-${career}.png`,
  };
}

export default function Career({ params }: { params: { career: Careers } }) {
  const career = params?.career;

  console.log(career);
  return (
    <>
      <Banner career={career} />
      <About career={career} />
      {career === "pharmacist" ? <Experience career={career} /> : <Projects />}
      <Footer career={career} />
    </>
  );
}
