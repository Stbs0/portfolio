import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

import Layout from "@/components/Layout";
import { ReactNode } from "react";

const poppings = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    // {
    //   path: "./fonts/Poppins-Black.ttf",
    //   weight: "400",
    // },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    // {
    //   path: "./fonts/Poppins-SemiBold.ttf",
    //   weight: "700",
    // },
  ],
  variable: "--font-poppins",
});
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
        className={` ${poppings.variable} overflow-y-scroll overflow-x-hidden relative bg-transparent   `}>
        <SpeedInsights />
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
