"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-[#ebf3fc] text-slate-700 py-2.5 text-sm border-b border-sky-100/80 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a
            href="tel:+917715888262"
            className="flex items-center space-x-1.5 hover:text-teal-600 transition-colors"
          >
            <Phone className="w-4.5 h-4.5 text-teal-600" />
            <span className="font-semibold text-slate-700 hover:text-teal-600">Call: +91 77158 88262</span>
          </a>
          <a
            href="mailto:info@mglaboratories.com"
            className="flex items-center space-x-1.5 hover:text-teal-600 transition-colors"
          >
            <Mail className="w-4.5 h-4.5 text-teal-600" />
            <span className="font-semibold text-slate-700 hover:text-teal-600">info@mglaboratories.com</span>
          </a>
          <div className="flex items-center space-x-1.5 text-slate-600">
            <MapPin className="w-4.5 h-4.5 text-teal-600" />
            <span className="font-medium">Kharadi, Pune - 411014</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs px-2.5 py-0.5 bg-white text-slate-800 rounded-full border border-sky-200 font-semibold shadow-sm">
            FSSAI Lic: 23626029002271
          </span>
          <span className="text-slate-300">|</span>
          <div className="flex space-x-3 text-xs font-semibold text-slate-500">
            <Link href="#" className="hover:text-teal-600 transition-colors">
              Facebook
            </Link>
            <Link href="#" className="hover:text-teal-600 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-teal-600 transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
