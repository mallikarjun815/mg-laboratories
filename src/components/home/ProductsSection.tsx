"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Pill, Sparkles, Shield, HeartPulse } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

const products = [
  {
    id: "nitomin",
    name: "Nitomin",
    category: "PCOS & Oocyte Therapy",
    tagline: "Combines Melatonin + Astaxanthin",
    desc: "A powerful combination of follicular and ovarian antioxidants designed to manage oxidative stress (ROS) and support oocyte quality in PCOS cases.",
    color: "from-sky-500 to-indigo-600",
    textColor: "text-sky-500",
    bgColor: "bg-sky-50",
    badgeColor: "bg-sky-500/10 text-sky-600",
    icon: Pill,
  },
  {
    id: "emthik",
    name: "Emthik",
    category: "Endometrial Health",
    tagline: "Thin Endometrium Implantation Support",
    desc: "Specifically formulated to manage thin endometrium challenges. Works by supporting VEGF factors, boosting blood flow, and reducing arterial resistance to improve implantation rates.",
    color: "from-rose-500 to-pink-600",
    textColor: "text-rose-500",
    bgColor: "bg-rose-50",
    badgeColor: "bg-rose-500/10 text-rose-600",
    icon: Sparkles,
  },
  {
    id: "endorelief",
    name: "Endorelief",
    category: "Hormonal Regulation",
    tagline: "Estrogen Regulation & Pain Control",
    desc: "A therapy targeting endometrial comfort by balancing estrogen, reducing pain, and inhibiting cell proliferation. Helps reduce relapse rates effectively.",
    color: "from-emerald-500 to-teal-600",
    textColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
    badgeColor: "bg-emerald-500/10 text-emerald-600",
    icon: HeartPulse,
  },
  {
    id: "adipolin",
    name: "Adipolin",
    category: "Metabolic Wellness",
    tagline: "Weight Management & Insulin Support",
    desc: "An innovative metabolic support solution targeting weight regulation and hormonal equilibrium for women experiencing PCOS or lifestyle challenges.",
    color: "from-amber-500 to-orange-600",
    textColor: "text-amber-600",
    bgColor: "bg-amber-50",
    badgeColor: "bg-amber-500/10 text-amber-600",
    icon: Shield,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#e11d48] font-bold text-xs uppercase tracking-widest block">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Specialized Gynecological & Reproductive Solutions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Discover our flagship therapeutic formulations engineered to address key cellular pathomechanisms and support womanhood.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className="group border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl ${product.bgColor} ${product.textColor} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                      {product.category}
                    </span>
                  </div>
                  <div className="mt-5 space-y-1">
                    <CardTitle className="text-2xl font-black text-slate-900 group-hover:text-[#1a3c6e] transition-colors uppercase">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      {product.tagline}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="px-8 py-2 flex-grow">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </CardContent>

                <CardFooter className="p-8 pt-4">
                  <Link
                    href={`/products#${product.id}`}
                    className="inline-flex items-center space-x-1.5 text-slate-700 hover:text-[#e11d48] font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    <span>Clinical Profile & Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16 bg-slate-50 border border-slate-100 p-8 rounded-2xl max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-slate-800 text-sm sm:text-base uppercase tracking-wider">Interested in bulk trade margins?</h4>
            <p className="text-xs text-slate-500">Contact our corporate distribution offices in Pune for licensing details.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#1a3c6e] hover:bg-[#25559c] text-white font-bold tracking-wider text-xs uppercase px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm flex-shrink-0 cursor-pointer"
          >
            Contact Distribution
          </Link>
        </div>

      </div>
    </section>
  );
}
