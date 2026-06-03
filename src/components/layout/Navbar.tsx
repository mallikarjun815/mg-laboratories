"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "Nitomin (PCOS Therapy)", href: "/products#nitomin" },
      { name: "Emthik (Endometrium Support)", href: "/products#emthik" },
      { name: "Endorelief (Pain & Estrogen Control)", href: "/products#endorelief" },
      { name: "Adipolin (Metabolic Support)", href: "/products#adipolin" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Logo className="h-10 w-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 font-semibold uppercase tracking-wider text-xs transition-colors duration-200 ${
                        isActive ? "text-[#e11d48] font-bold" : "text-slate-700 hover:text-[#1a3c6e]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>
                    <div
                      className={`absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-lg shadow-xl py-2 transform transition-all duration-300 origin-top-left ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                          : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1a3c6e] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold uppercase tracking-wider text-xs transition-colors duration-200 ${
                    isActive ? "text-[#e11d48] font-bold" : "text-slate-700 hover:text-[#1a3c6e]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact#get-in-touch"
              className="bg-[#1a3c6e] hover:bg-[#25559c] text-white text-xs uppercase font-bold tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#1a3c6e] transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 pb-6 h-full overflow-y-auto">
            <div className="px-6 space-y-1">
              {navItems.map((item) => {
                const isActive = isActiveLink(item.href);
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="py-2">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                          isActive ? "bg-emerald-50 text-emerald-600" : "text-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </Link>
                      <div className="pl-4 mt-1 space-y-0.5 border-l-2 border-slate-100 ml-6">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 px-4 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive ? "bg-emerald-50 text-emerald-600" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="px-6 mt-6">
              <Link
                href="/contact#get-in-touch"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#1a3c6e] hover:bg-[#25559c] text-white text-xs uppercase font-bold tracking-widest py-3.5 rounded-xl transition-all duration-300 shadow-md"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
