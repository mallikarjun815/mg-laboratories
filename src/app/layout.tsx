import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MG Laboratories Private Limited | Women's Healthcare Solutions",
    template: "%s | MG Laboratories Pvt. Ltd.",
  },
  description:
    "MG Laboratories Private Limited — Innovative pharmaceutical therapies for PCOS, oocyte health, endometrial thickness, and metabolic wellness. FSSAI Certified.",
  keywords:
    "MG Laboratories, Nitomin, Emthik, Endorelief, Adipolin, PCOS, thin endometrium, oocyte quality, women health, gynecology Pune",
  metadataBase: new URL("https://mglaboratories.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900 overflow-x-hidden max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
