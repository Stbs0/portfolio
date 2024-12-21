import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { isDeveloper } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://ibiimemon.com/"),
  title: "Mohammed Mahmoud - SWE | IXD | UX - Developer Portfolio",
  description:
    "Developer Portfolio of Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Mohammed Mahmoud",
    "Ibrahim",
    "IbiiMemon",
    "IbrahimMemon",
    "Ibrahim_Memon",
    "Next.js",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Mohammed Mahmoud - SWE | IXD | UX",
    description:
      "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
  // alternates: {
  //   canonical: "https://ibiimemon.com/",
  // },
};
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { career: string };
}) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Mohammed Mahmoud",
              jobTitle: "Web Developer | Pharmacists",
              url: "https://ibiimemon.com",
              sameAs: [
                "https://www.linkedin.com/in/mohammed-ibrahim-mahmoud/",
                "https://github.com/stbs0",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden relative bg-transparent`}>
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <div
          className={`absolute right-0  h-full  bg-[url('/LooperGroup2.png')] ${
            isDeveloper(params.career) ? "" : "invert"
          }  bg-no-repeat    z-[-1] `}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
