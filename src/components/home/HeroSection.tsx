"use client";

import React, { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/HomepageImage1.png",
    badge: "Leading with Science, Caring with Heart",
    heading: 'Innovative Therapies for <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300">Women\'s Health</span>',
    description: "At MG Laboratories, we address key therapeutic gaps in gynecological and metabolic wellness. Discover advanced solutions tailored for PCOS, thin endometrium, and fertility support.",
  },
  {
    image: "/HomepageImage2.png",
    badge: "Empowering Women, Enriching Lives",
    heading: 'Empowering Every Woman with <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300">Healthy Lifestyle</span>',
    description: "The health and well-being of Woman affect the family and the society. Women's Nutritional Status, especially in India is worrisome. So being a women centric company we focus on empowering every woman to the avenue of positive health - a broad spectrum of daily functioning of healthy body and quality life overcoming all the physical and emotional challenges.",
  },
];

const len = slides.length;
const allSlides = [slides[len - 1], ...slides, slides[0]];

export default function HeroSection() {
  const [current, setCurrent] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  const goTo = useCallback((index: number) => {
    if (!trackRef.current || isJumping.current) return;
    trackRef.current.style.transition = "transform 1s ease-in-out";
    setCurrent(index);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (current === 0) {
      isJumping.current = true;
      const el = trackRef.current!;
      el.style.transition = "none";
      setCurrent(len);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { isJumping.current = false; });
      });
    } else if (current === allSlides.length - 1) {
      isJumping.current = true;
      const el = trackRef.current!;
      el.style.transition = "none";
      setCurrent(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { isJumping.current = false; });
      });
    }
  }, [current]);

  const realIndex = current === 0 ? len - 1 : current === allSlides.length - 1 ? 0 : current - 1;

  return (
    <div className="relative overflow-hidden min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh]">
      <div
        ref={trackRef}
        className="flex min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh]"
        style={{ width: `${allSlides.length * 100}%`, transform: `translateX(-${current * (100 / allSlides.length)}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {allSlides.map((s, i) => (
          <div key={`${s.image}-${i}`} className="relative flex items-center bg-cover bg-center" style={{ width: `${100 / allSlides.length}%`, backgroundImage: `url('${s.image}')` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10 w-full">
              <div className="max-w-3xl text-center lg:text-left space-y-5 sm:space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/15 text-white/90 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
                  <span>{s.badge}</span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white" dangerouslySetInnerHTML={{ __html: s.heading }} />
                <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed line-clamp-4 sm:line-clamp-none">{s.description}</p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                  <Link href="/products" className="bg-teal-500 hover:bg-teal-400 text-white font-bold tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-[10px] sm:text-xs uppercase">
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                  <Link href="/about" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-[10px] sm:text-xs uppercase flex items-center justify-center backdrop-blur-sm">
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => goTo(current - 1)} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-sm" aria-label="Previous slide">
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button onClick={() => goTo(current + 1)} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-sm" aria-label="Next slide">
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i + 1)} className={`rounded-full transition-all duration-300 ${i === realIndex ? "bg-teal-400 w-6 sm:w-8 h-2 sm:h-2.5" : "bg-white/40 hover:bg-white/60 w-2 h-2 sm:w-2.5 sm:h-2.5"}`} />
        ))}
      </div>
    </div>
  );
}
