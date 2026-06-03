import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nitomin | PCOS & Oocyte Therapy",
  description:
    "Nitomin combines Melatonin + Astaxanthin for PCOS management. A powerful follicular and ovarian antioxidant supporting oocyte quality in PCOS cases.",
  openGraph: {
    title: "Nitomin | PCOS & Oocyte Therapy | MG Laboratories",
    description:
      "Melatonin + Astaxanthin combination for PCOS management and oocyte quality support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitomin | PCOS & Oocyte Therapy | MG Laboratories",
    description:
      "Melatonin + Astaxanthin combination for PCOS management and oocyte quality support.",
  },
  alternates: {
    canonical: "https://mglaboratories.com/products/nitomin",
  },
};

export default function NitominPage() {
  redirect("/products#nitomin");
}
