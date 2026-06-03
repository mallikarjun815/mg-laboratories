"use client";

import React from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart } from "lucide-react";
import AboutSection from "@/components/home/AboutSection";

export default function AboutContent() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-grow">

        {/* Page Header */}
        <section className="relative py-16 sm:py-20 overflow-hidden border-b border-sky-100/60 flex items-center min-h-[30vh] sm:min-h-[40vh]" style={{ backgroundImage: "url('/AboutImage.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4 w-full">
            <span className="text-teal-300 font-bold text-[10px] sm:text-xs uppercase tracking-widest block">
              Our Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              About MG Laboratories
            </h1>
            <p className="text-white/70 text-[10px] sm:text-xs max-w-xl mx-auto uppercase tracking-wider font-semibold">
              <a href="/" className="text-white/90 hover:text-teal-300 transition-colors">Home</a> &gt; About
            </p>
          </div>
        </section>

        <AboutSection />

        {/* Mission — Vision — Values */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Left: Three box cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em]">Our Mission</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Delivering Innovative Healthcare Solutions</h2>
                  <p className="text-gray-500 leading-relaxed">Our mission is to deliver innovative and high-quality healthcare solutions that improve lives and promote wellness. We are committed to safety, customer satisfaction, and healthcare excellence. Through research and innovation, we strive to meet modern healthcare needs. We believe in creating trusted products that support healthier communities. Our goal is to make quality healthcare accessible and reliable for everyone.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-teal-600 font-bold text-xs uppercase tracking-[0.2em]">Our Vision</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Building a Healthier Future Together</h2>
                  <p className="text-gray-500 leading-relaxed">Our vision is to become a trusted and leading healthcare brand known for innovation and quality. We aim to create a healthier future through advanced pharmaceutical solutions. We continuously work to improve healthcare standards and customer well-being. Through dedication and excellence, we strive to positively impact lives. Our focus is on building long-term trust and healthier communities.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Heart className="w-6 h-6" />
                    </div>
                    <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em]">Our Values</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Integrity, Quality & Innovation</h2>
                  <p className="text-gray-500 leading-relaxed">At MG Laboratories, we believe in integrity, quality, and innovation in everything we do. We are committed to delivering trusted healthcare solutions with responsibility and care. Teamwork, customer satisfaction, and continuous growth drive our success. We value ethical practices and excellence in healthcare standards. Our passion for wellness motivates us to create a positive impact every day.</p>
                </div>
              </div>

              {/* Right: Big image spanning full height */}
              <div className="relative hidden lg:block h-full">
                <div className="rounded-3xl overflow-hidden shadow-xl h-full">
                  <img src="/AboutImage3.avif" alt="MG Laboratories team and facilities" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl -z-10" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}