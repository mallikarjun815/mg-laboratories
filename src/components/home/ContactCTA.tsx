"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#ebf4fc] text-slate-800 py-20 relative overflow-hidden border-t border-sky-100/60">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(225,29,72,0.03),transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block">
          Get in Touch
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto text-slate-900">
          Need Detailed Specifications or Product Licensing Support?
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Our Pune headquarters is equipped to support medical queries, trade distribution partnerships, and product detail requests.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6">
          <a
            href="tel:+917715888262"
            className="bg-white border border-sky-100 rounded-2xl p-6 hover:bg-slate-50/50 hover:shadow-md hover:border-teal-500/30 transition-all group flex flex-col items-center cursor-pointer shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-teal-600 flex items-center justify-center mb-3 border border-sky-100">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block mb-1">Corporate Call</span>
            <span className="text-sm font-bold text-slate-800 group-hover:text-teal-600 transition-colors">+91 77158 88262</span>
          </a>

          <a
            href="mailto:info@mglaboratories.com"
            className="bg-white border border-sky-100 rounded-2xl p-6 hover:bg-slate-50/50 hover:shadow-md hover:border-rose-500/30 transition-all group flex flex-col items-center cursor-pointer shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-3 border border-rose-100">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block mb-1">Email Queries</span>
            <span className="text-sm font-bold text-slate-800 group-hover:text-rose-600 transition-colors">info@mglaboratories.com</span>
          </a>

          <Link
            href="/contact"
            className="bg-white border border-sky-100 rounded-2xl p-6 hover:bg-slate-50/50 hover:shadow-md hover:border-emerald-500/30 transition-all group flex flex-col items-center cursor-pointer shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 border border-emerald-100">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block mb-1">Office Meet</span>
            <span className="text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center space-x-1 justify-center">
              <span>Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
