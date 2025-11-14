import type { Metadata } from "next";
import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import localFont from "next/font/local";

import Layout from "@/components/Layout";
import { ReactNode } from "react";

const poppings = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

// Define JSON-LD schema for the Person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Mahmoud",
  url: "https://www.mohammedibrahimmahmoud.pro",
  jobTitle: "Full-Stack Developer & Pharmacist",
  sameAs: [
    "https://github.com/stbs0",
    "https://www.linkedin.com/in/mohammed-ibrahim-mahmoud/",
    "https://twitter.com/stbs66",
    "https://www.instagram.com/stbs0/?hl=en",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mohammedibrahimmahmoud.pro"),
  title: {
    default: "Mohammed Mahmoud (stbs) - Developer & Pharmacist Portfolio",
    template: "%s | Mohammed Mahmoud (stbs)",
  },
  description:
    "Explore the portfolio of Mohammed Mahmoud, a multi-talented professional transitioning from a successful career as a pharmacist to a passionate full-stack developer. Discover projects in React, Next.js, and TypeScript, and see how clinical precision translates into clean, efficient code.",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Mohammed Mahmoud (stbs) - Developer & Pharmacist Portfolio",
    description:
      "A portfolio showcasing expertise in web development and pharmacy.",
    url: "https://www.mohammedibrahimmahmoud.pro",
    siteName: "Mohammed Mahmoud Portfolio",
    images: [
      {
        url: "/others/openGraph.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Mohammed Mahmoud's Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mahmoud (stbs) - Developer & Pharmacist Portfolio",
    description:
      "Explore the portfolio of a skilled full-stack developer and experienced pharmacist.",
    creator: "@stbs66", // Your Twitter handle
    images: ["/others/openGraph.png"], // Must be an absolute URL
  },

  // JSON-LD Structured Data
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Mohammed Mahmoud Portfolio",
  appleWebApp: {
    title: "Mohammed Mahmoud Portfolio",
    statusBarStyle: "default",
    capable: true,
  },
  // Add JSON-LD to the head
  // The script tag will be automatically generated
  // and added to the head of the document
  // by Next.js
  // @ts-ignore
  "ld+json": personSchema,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TPPSZRGP" />
      <body
        className={` ${poppings.variable} relative min-w-[400px] bg-transparent`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
