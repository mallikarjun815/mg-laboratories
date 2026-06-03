"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: "Suite No.1328, 15A, 4th Floor, City Vista, Fountain Road, Kharadi, Pune - 411014.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: "mglaboratories@gmail.com",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 9876543210",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-grow">

        {/* SECTION 1 — Hero Banner */}
        <section className="relative overflow-hidden" style={{ minHeight: "35vh" }}>
          <div className="absolute inset-0">
            <img src="/ContactImage.png" alt="MG Laboratories contact banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[35vh] px-4 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight mb-3 sm:mb-4">
              Contact Us
            </h1>
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-white font-semibold">Contact Us</span>
            </nav>
          </div>
        </section>

        {/* SECTION 2 — Contact Info Cards */}
        <section className="relative z-10 -mt-20 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full ${info.bg} ${info.color} flex items-center justify-center mx-auto mb-5`}>
                    <info.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{info.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Contact Form + Image */}
        <section id="get-in-touch" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: Form */}
              <div>
                <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest block mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                  We Would Love to Hear From You
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Have a question, a suggestion, or a partnership inquiry? Fill out the form and our team will get back to you shortly.
                </p>

                {submitted ? (
                  <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-800">Message Received!</h2>
                      <p className="text-slate-500 text-sm max-w-md mx-auto">
                        Thank you for contacting MG Laboratories. Our team will respond shortly.
                      </p>
                    </div>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2 uppercase text-xs tracking-wider"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs uppercase font-bold text-slate-600">Full Name</Label>
                        <Input
                          id="name" name="name" type="text" required
                          value={formData.name} onChange={handleChange}
                          placeholder="Your Name"
                          className="rounded-xl border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs uppercase font-bold text-slate-600">Email Address</Label>
                        <Input
                          id="email" name="email" type="email" required
                          value={formData.email} onChange={handleChange}
                          placeholder="name@example.com"
                          className="rounded-xl border-slate-200 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs uppercase font-bold text-slate-600">Phone Number</Label>
                        <Input
                          id="phone" name="phone" type="tel"
                          value={formData.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="rounded-xl border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-xs uppercase font-bold text-slate-600">Subject</Label>
                        <Input
                          id="subject" name="subject" type="text" required
                          value={formData.subject} onChange={handleChange}
                          placeholder="Enquiry Subject"
                          className="rounded-xl border-slate-200 bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs uppercase font-bold text-slate-600">Your Message</Label>
                      <Textarea
                        id="message" name="message" required
                        value={formData.message} onChange={handleChange}
                        placeholder="Write your query details here..."
                        rows={5}
                        className="rounded-xl border-slate-200 bg-white"
                      />
                    </div>

                    <Button
                      type="submit" disabled={loading}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {loading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Submit Query</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right: Image */}
              <div className="hidden lg:block">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src="/AboutImage2.png" alt="MG Laboratories contact and support" className="w-full h-auto object-cover" />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}