"use client";

import React from "react";
import { Package, Users, Star, Clock } from "lucide-react";

const stats = [
  { icon: Package, value: "100+", label: "Products" },
  { icon: Users, value: "10,000+", label: "Customers" },
  { icon: Star, value: "50+", label: "Healthcare Experts" },
  { icon: Clock, value: "5+", label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#ebf4fc] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 font-medium mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
