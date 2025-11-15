import { CAREERS } from "@/constant";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.mohammedibrahimmahmoud.pro";

  const careerUrls = CAREERS.map((career) => ({
    url: `${baseUrl}/${career}`,
    lastModified: new Date(),
    priority: 0.9, // Assign high priority to main career pages
  }));

  return [
    // You could add a static home page here if you had one
    // {
    //   url: baseUrl,
    //   lastModified: new Date(),
    //   priority: 1.0,
    // },
    ...careerUrls,
  ];
}
