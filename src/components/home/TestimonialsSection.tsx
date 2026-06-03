"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote: "Nitomin has shown excellent results in my PCOS patients. The combination of Melatonin and Astaxanthin acts as a complete antioxidant support, significantly improving clinical parameters.",
    author: "Dr. Anjali Mehta, MD",
    specialty: "Consultant Gynecologist, Mumbai",
    rating: 5,
  },
  {
    quote: "Managing thin endometrium was always a clinical hurdle. Prescribing Emthik has helped improve implantation outcomes by boosting vascular support and endometrial thickness.",
    author: "Dr. R. K. Sharma",
    specialty: "Infertility Specialist, Pune IVF Centre",
    rating: 5,
  },
  {
    quote: "Endorelief has helped our patients reduce the pain and relapse rates associated with endometrial challenges. It is a well-tolerated therapy for everyday management.",
    author: "Dr. Priya Deshmukh, DGO",
    specialty: "Gynecology & Obstetrics, Pune Clinic",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#e11d48] font-bold text-xs uppercase tracking-widest block">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by Leading Medical Practitioners
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Read how our specialized therapies are helping doctors and specialists provide better wellness answers to women.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <MessageSquare className="w-6 h-6 text-slate-200" />
                </div>
                <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                    {t.author}
                  </h4>
                  <p className="text-slate-400 text-[10px] uppercase font-semibold tracking-wider">
                    {t.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
