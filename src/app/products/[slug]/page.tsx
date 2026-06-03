import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details | MG Laboratories Private Limited",
  description:
    "Explore detailed clinical profiles of our niche nutritional supplements for women's health and gynecological wellness.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  redirect(`/products#${params.slug}`);
}
