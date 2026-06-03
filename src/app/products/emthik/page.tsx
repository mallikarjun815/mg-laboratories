import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emthik | Endometrial Receptivity Support",
  description:
    "Emthik combines L-Arginine + Pine Bark Extract + Vitamin E for thin endometrium support. Promotes uterine blood flow and improves implantation outcomes.",
  openGraph: {
    title: "Emthik | Endometrial Support | MG Laboratories",
    description:
      "L-Arginine + Pine Bark Extract + Vitamin E for thin endometrium and implantation support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emthik | Endometrial Support | MG Laboratories",
    description:
      "L-Arginine + Pine Bark Extract + Vitamin E for thin endometrium and implantation support.",
  },
  alternates: {
    canonical: "https://mglaboratories.com/products/emthik",
  },
};

export default function EmthikPage() {
  redirect("/products#emthik");
}
