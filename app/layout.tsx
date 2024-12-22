import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Layout from "@/components/Layout";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-stbs0s-projects.vercel.app/developer",
  ),
  title: {
    default: "Mohammed Mahmoud (stbs) - Developer Portfolio",
    template: "Mohammed Mahmoud (stbs) - %s Portfolio",
  },

  // openGraph: {
  //   title: "Mohammed Mahmoud - SWE | IXD | UX",
  //   description:
  //     "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  //   // images: "/OpenGraph.jpg",
  // },
  // alternates: {
  //   canonical: "https://ibiimemon.com/",
  // },
};
export default function RootLayout({
  children,
}: {
  children: ReactNode;
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
        className={`${inter.className} overflow-y-scroll overflow-x-hidden relative bg-transparent   `}>
        <SpeedInsights />
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
