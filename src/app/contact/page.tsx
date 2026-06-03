import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MG Laboratories Private Limited. Reach our corporate office in Kharadi, Pune for product inquiries, trade partnerships, and medical information.",
  keywords: [
    "contact MG Laboratories", "Pune pharmaceutical office", "MG Labs address",
    "Nitomin distributor inquiry", "women's healthcare products India",
  ],
  openGraph: {
    title: "Contact MG Laboratories Private Limited",
    description:
      "Reach our corporate office in Kharadi, Pune for product inquiries, trade partnerships, and medical information.",
    url: "https://mglaboratories.com/contact",
    images: [
      {
        url: "/ContactImage.png",
        width: 1200,
        height: 630,
        alt: "Contact MG Laboratories corporate office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MG Laboratories Private Limited",
    description:
      "Reach our corporate office in Kharadi, Pune for product inquiries, trade partnerships, and medical information.",
    images: ["/ContactImage.png"],
  },
  alternates: {
    canonical: "https://mglaboratories.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
