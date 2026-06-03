import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adipolin | Metabolic & Weight Regulation",
  description:
    "Adipolin combines Myo-Inositol + D-Chiro-Inositol + Chromium Picolinate for insulin resistance and metabolic weight management in PCOS patients.",
  openGraph: {
    title: "Adipolin | Metabolic Support | MG Laboratories",
    description:
      "Myo-Inositol + D-Chiro-Inositol + Chromium Picolinate for insulin sensitivity and weight regulation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adipolin | Metabolic Support | MG Laboratories",
    description:
      "Myo-Inositol + D-Chiro-Inositol + Chromium Picolinate for insulin sensitivity and weight regulation.",
  },
  alternates: {
    canonical: "https://mglaboratories.com/products/adipolin",
  },
};

export default function AdipolinPage() {
  redirect("/products#adipolin");
}
