"use client";

import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    image: "/placeholder-1.jpg",
    title: "Innovative Therapies for Women's Health",
    description:
      "At MG Laboratories, we address key therapeutic gaps in gynecological and metabolic wellness. Discover advanced solutions tailored for PCOS, thin endometrium, and fertility support.",
    gradient: "from-sky-100 to-sky-200",
  },
  {
    image: "/placeholder-2.jpg",
    title: "Science-Backed Formulations",
    description:
      "Our products are developed through rigorous clinical research and quality testing, ensuring safety and efficacy for every patient.",
    gradient: "from-teal-100 to-teal-200",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, []);

  const slide = slides[current];

  return (
    <div className="relative bg-white/80 border border-sky-100/80 rounded-2xl p-8 shadow-xl shadow-sky-100/40 backdrop-blur-md overflow-hidden min-h-[400px] flex flex-col">
      {/* Background gradient blob */}
      <div
        className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${slide.gradient} rounded-bl-full opacity-40 transition-all duration-700`}
      />

      {/* Image placeholder */}
      <div
        className={`w-full h-48 rounded-xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center text-slate-400 text-sm font-medium transition-all duration-500`}
      >
        <span className="bg-white/60 px-4 py-2 rounded-full shadow-sm">
          Image {current + 1}
        </span>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col justify-center mt-6 space-y-4">
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight transition-all duration-500">
          {slide.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed transition-all duration-500">
          {slide.description}
        </p>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-sky-100">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all text-slate-700"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-teal-600 w-5"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all text-slate-700"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
