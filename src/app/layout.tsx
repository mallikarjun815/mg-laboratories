import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mglaboratories.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MG Laboratories Private Limited | Women's Healthcare Solutions",
    template: "%s | MG Laboratories Pvt. Ltd.",
  },
  description:
    "MG Laboratories Private Limited — Innovative pharmaceutical therapies for PCOS, oocyte health, endometrial thickness, and metabolic wellness. FSSAI Certified.",
  keywords: [
    "MG Laboratories", "Nitomin", "Emthik", "Endorelief", "Adipolin",
    "PCOS treatment", "thin endometrium therapy", "oocyte quality",
    "women's healthcare India", "gynecology Pune", "FSSAI certified supplements",
    "infertility support", "metabolic wellness",
  ],
  authors: [{ name: "MG Laboratories Private Limited" }],
  creator: "MG Laboratories Private Limited",
  publisher: "MG Laboratories Private Limited",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MG Laboratories Private Limited",
    title: "MG Laboratories Private Limited | Women's Healthcare Solutions",
    description:
      "Innovative pharmaceutical therapies for PCOS, oocyte health, endometrial thickness, and metabolic wellness. FSSAI Certified.",
    url: siteUrl,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "MG Laboratories",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#059669",
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
