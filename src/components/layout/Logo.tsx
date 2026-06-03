import React from "react";

export default function Logo({ className = "h-10", inverted }: { className?: string; inverted?: boolean }) {
  return (
    <div className="flex items-center space-x-3">
      {/* Stylized MG Swirl Logo */}
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background base circle (faint) */}
        <circle cx="50" cy="50" r="45" stroke="#f1f5f9" strokeWidth="2" />
        
        {/* Outer Blue Swish representing 'M' */}
        <path
          d="M20,50 C20,30 35,15 55,15 C70,15 80,25 80,40 C80,60 60,80 40,80 C30,80 20,70 20,50 Z"
          stroke="#1a3c6e"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="140"
          strokeDashoffset="10"
        />

        {/* Inner Magenta Swish representing 'G' */}
        <path
          d="M40,35 C45,25 60,25 70,35 C75,40 75,50 70,60 C65,70 50,75 40,70 C33,65 33,55 40,45"
          stroke="#e11d48"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`text-xl font-bold tracking-tight leading-none uppercase ${inverted ? "text-white" : "text-[#1a3c6e]"}`}>
          MG Laboratories
        </span>
        <span className={`text-[9px] font-semibold tracking-[0.25em] uppercase leading-normal ${inverted ? "text-slate-400" : "text-slate-500"}`}>
          Private Limited
        </span>
      </div>
    </div>
  );
}
