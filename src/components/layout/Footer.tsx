"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Award } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-600/50">
          
          {/* Company Brief */}
          <div className="space-y-6">
            <div className="bg-slate-700 p-2.5 rounded-lg inline-block border border-slate-600">
              <Logo className="h-9 w-9" inverted />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              MG Laboratories Private Limited is a specialty pharmaceutical company dedicated to enhancing health and wellness through advanced, science-backed therapies.
            </p>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-200">FSSAI Certified</p>
                <p>Lic No. 23626029002271</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-emerald-400">
              Key Therapies
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/products#nitomin" className="hover:text-emerald-400 transition-colors flex justify-between">
                  <span className="font-medium text-slate-300 hover:text-emerald-400">Nitomin</span>
                  <span className="text-xs text-slate-500">PCOS</span>
                </Link>
              </li>
              <li>
                <Link href="/products#emthik" className="hover:text-emerald-400 transition-colors flex justify-between">
                  <span className="font-medium text-slate-300 hover:text-emerald-400">Emthik</span>
                  <span className="text-xs text-slate-500">Endometrium</span>
                </Link>
              </li>
              <li>
                <Link href="/products#endorelief" className="hover:text-emerald-400 transition-colors flex justify-between">
                  <span className="font-medium text-slate-300 hover:text-emerald-400">Endorelief</span>
                  <span className="text-xs text-slate-500">Estrogen</span>
                </Link>
              </li>
              <li>
                <Link href="/products#adipolin" className="hover:text-emerald-400 transition-colors flex justify-between">
                  <span className="font-medium text-slate-300 hover:text-emerald-400">Adipolin</span>
                  <span className="text-xs text-slate-500">Metabolic</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-emerald-400">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Suite No.1328, 15A, 4th Floor, City Vista, Fountain Road, Kharadi, Pune - 411014.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+917715888262" className="text-slate-300 hover:text-white transition-colors font-medium">
                  +91 77158 88262
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@mglaboratories.com" className="text-slate-300 hover:text-white transition-colors font-medium">
                  info@mglaboratories.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} MG Laboratories Private Limited. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <span>TM - Trademark Under Registration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
