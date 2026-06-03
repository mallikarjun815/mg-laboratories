import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endorelief | Hormonal Balance & Endometrial Comfort",
  description:
    "Endorelief combines Indole-3-Carbinol + Resveratrol + Curcuminoids for estrogen regulation and endometrial pain management. Reduces post-surgical recurrence rates.",
  openGraph: {
    title: "Endorelief | Hormonal Balance | MG Laboratories",
    description:
      "Indole-3-Carbinol + Resveratrol + Curcuminoids for estrogen regulation and endometrial comfort.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endorelief | Hormonal Balance | MG Laboratories",
    description:
      "Indole-3-Carbinol + Resveratrol + Curcuminoids for estrogen regulation and endometrial comfort.",
  },
  alternates: {
    canonical: "https://mglaboratories.com/products/endorelief",
  },
};

export default function EndoreliefPage() {
  redirect("/products#endorelief");
}
