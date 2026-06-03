"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #059669 0%, transparent 50%), radial-gradient(circle at 80% 50%, #059669 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/AboutImage2.png"
                alt="MG Laboratories healthcare facility and products"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative dot pattern */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl -z-10" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] block">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Committed to Better Healthcare Solutions
              </h2>
              <p className="text-gray-500 leading-relaxed text-base">
                MG Laboratories is dedicated to improving lives through innovative pharmaceutical and healthcare solutions. We focus on delivering high-quality products that support wellness, promote healthy living, and meet modern healthcare needs with trust and reliability.
              </p>
              <p className="text-gray-500 leading-relaxed text-base">
                Our commitment to research, quality standards, and customer satisfaction helps us provide effective healthcare solutions designed to improve everyday wellness and enhance quality of life.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
