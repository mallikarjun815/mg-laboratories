import React from "react";
import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MG Laboratories Private Limited | Women's Healthcare Solutions",
  description:
    "Innovative pharmaceutical therapies for PCOS, oocyte health, endometrial thickness, and metabolic wellness. Delivering trust and science-backed support.",
  keywords: [
    "MG Laboratories", "Nitomin", "Emthik", "Endorelief", "Adipolin",
    "PCOS treatment India", "oocyte quality supplements", "thin endometrium therapy",
    "women's healthcare", "gynecology Pune",
  ],
  openGraph: {
    title: "MG Laboratories Private Limited | Women's Healthcare Solutions",
    description:
      "Innovative pharmaceutical therapies for PCOS, oocyte health, endometrial thickness, and metabolic wellness.",
    url: "https://mglaboratories.com",
    images: [
      {
        url: "/HomepageImage1.png",
        width: 1200,
        height: 630,
        alt: "MG Laboratories - Women's Healthcare Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MG Laboratories Private Limited | Women's Healthcare Solutions",
    description:
      "Innovative pharmaceutical therapies for PCOS, oocyte health, endometrial thickness, and metabolic wellness.",
    images: ["/HomepageImage1.png"],
  },
  alternates: {
    canonical: "https://mglaboratories.com",
  },
};

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
