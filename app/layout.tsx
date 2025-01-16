import type { Metadata } from "next";
import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import localFont from "next/font/local";

import Layout from "@/components/Layout";
import Script from "next/script";
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
  metadataBase: new URL("https://www.mohammedibrahimmahmoud.pro"),
  title: {
    default: "Mohammed Mahmoud (stbs) - Developer Portfolio",
    template: "Mohammed Mahmoud (stbs) - %s Portfolio",
  },
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
              url: "https://www.mohammedibrahimmahmoud.pro/",
              sameAs: [
                "https://www.linkedin.com/in/mohammed-ibrahim-mahmoud/",
                "https://github.com/stbs0",
              ],
            }),
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-TPPSZRGP" />
      <body
        className={` ${poppings.variable} relative min-w-[400px] overflow-x-hidden overflow-y-scroll bg-transparent`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
