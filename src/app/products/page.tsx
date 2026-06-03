import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailSection from "@/components/product/ProductDetailSection";
import { productsList as rawProductsList } from "@/data/products";
import { Pill, Sparkles, HeartPulse, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | MG Laboratories Private Limited",
  description:
    "Explore the clinical profiles of Nitomin, Emthik, Endorelief, and Adipolin — our niche nutritional supplements addressing PCOS, thin endometrium, hormonal imbalance, and metabolic wellness.",
  keywords: [
    "Nitomin PCOS supplement", "Emthik endometrium support",
    "Endorelief estrogen regulation", "Adipolin metabolic support",
    "women's health products India", "gynecology supplements Pune",
  ],
  openGraph: {
    title: "Products | MG Laboratories Private Limited",
    description:
      "Nitomin, Emthik, Endorelief, and Adipolin — niche nutritional supplements for PCOS, endometrial health, hormonal balance, and metabolic wellness.",
    url: "https://mglaboratories.com/products",
    images: [
      {
        url: "/products_banner.png",
        width: 1200,
        height: 630,
        alt: "MG Laboratories product portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | MG Laboratories Private Limited",
    description:
      "Nitomin, Emthik, Endorelief, and Adipolin — niche nutritional supplements for women's health.",
    images: ["/products_banner.png"],
  },
  alternates: {
    canonical: "https://mglaboratories.com/products",
  },
};

const iconMap = { Pill, Sparkles, HeartPulse, Shield } as const;

const productsList = rawProductsList.map((p) => ({
  ...p,
  icon: (iconMap as any)[p.icon] ?? Pill,
}));

export default function ProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-grow bg-slate-50">
        
        {/* Banner with Doctor holding anatomical model image from nishetherapeutics.org */}
        <section 
          className="relative bg-teal-950 text-white py-16 sm:py-20 lg:py-28 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url('/products_banner.png')` }}
        >
          <div className="absolute inset-0 bg-teal-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/60 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase">
              Our Products
            </h1>
            <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              We are addressing lifestyle challenges and disorders through Niche Nutritional Supplements.
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold text-teal-200/90 pt-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-400" />
              <span className="text-white">Our Products</span>
            </div>
          </div>
        </section>

        {/* Stacked Products Section with elegant wave separators */}
        <div className="w-full bg-slate-50">
          {productsList.map((product, index) => (
            <div key={product.id} className="relative">
              <ProductDetailSection product={product} />
              {index < productsList.length - 1 && (
                <div className="w-full bg-slate-50 py-4 flex items-center justify-center">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
