import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MG Laboratories Private Limited — our mission, vision, and values. A specialty pharmaceutical company dedicated to women's healthcare and innovative therapeutic solutions.",
  keywords: [
    "MG Laboratories about", "pharmaceutical company Pune", "women's healthcare company",
    "Nitomin manufacturer", "Emthik supplier", "healthcare mission India",
  ],
  openGraph: {
    title: "About MG Laboratories Private Limited",
    description:
      "Specialty pharmaceutical company dedicated to women's healthcare through innovative, science-backed therapies.",
    url: "https://mglaboratories.com/about",
    images: [
      {
        url: "/AboutImage.png",
        width: 1200,
        height: 630,
        alt: "MG Laboratories corporate profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MG Laboratories Private Limited",
    description:
      "Specialty pharmaceutical company dedicated to women's healthcare through innovative, science-backed therapies.",
    images: ["/AboutImage.png"],
  },
  alternates: {
    canonical: "https://mglaboratories.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}


