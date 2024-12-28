import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import Layout from "@/components/Layout";
import { ReactNode } from "react";
import Script from "next/script";

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
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Mohammed Mahmoud (stbs) - Developer Portfolio",
    template: "Mohammed Mahmoud (stbs) - %s Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
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
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
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
      <GoogleAnalytics gaId="G-9SF27F3H6H" />

      <body
        className={` ${poppings.variable} relative overflow-x-hidden overflow-y-scroll bg-transparent`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
