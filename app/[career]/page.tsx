import About from "@/components/About";
import Banner from "@/components/Banner";
import Projects from "@/components/developer/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/pharmacist/Experience";
import References from "@/components/pharmacist/References";
import Skills from "@/components/Skills";

import { BANNER, CAREERS } from "@/constant";
import { Careers } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type CareerPageProps = {
  params: Promise<{ career: Careers }>;
};

export async function generateMetadata({
  params,
}: CareerPageProps): Promise<Metadata> {
  const { career } = await params;

  if (!CAREERS.includes(career)) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const title = career.charAt(0).toUpperCase() + career.slice(1); // Capitalize career name
  const description = `Explore Mohammed Mahmoud's ${title} portfolio. ${BANNER[career]}`;

  return {
    title: `${title} Portfolio`,
    description: description,

    // Open Graph and Twitter cards for each career
    openGraph: {
      title: `${title} Portfolio | Mohammed Mahmoud (stbs)`,
      description: description,
      images: [
        {
          url: `/icon/icon-${career}.svg`, // Assumes icons are in public/icon
          width: 512,
          height: 512,
          alt: `${title} icon`,
        },
      ],
    },
    twitter: {
      title: `${title} Portfolio | Mohammed Mahmoud (stbs)`,
      description: description,
      images: [`/icon/icon-${career}.svg`],
    },

    icons: {
      icon: `/icon/icon-${career}.svg`,
    },
  };
}
export async function generateStaticParams() {
  return CAREERS.map((career) => ({
    career,
  }));
}

export default async function Career(props: {
  params: Promise<{ career: Careers }>;
}) {
  const params = await props.params;
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
      {career === "pharmacist" ? <References /> : null}
      <Footer career={career} />
    </>
  );
}
