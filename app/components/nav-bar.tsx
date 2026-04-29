"use client";

import React, { useState } from "react";
import { Link } from "react-aria-components";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (e: any, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f8f5f0] backdrop-blur-xl border-b border-white/20 z-50 shadow-lg shadow-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#hero"
          // className="text-xl font-bold raleway text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 focus:ring-offset-white/50 rounded"
          onClick={(e) => handleClick(e, "#hero")}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold raleway shadow-xl shadow-black/20 rotate-3 hover:rotate-0 transition-transform duration-300">
            JG
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium raleway transition-colors focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 focus:ring-offset-white/50 rounded-lg px-3 py-2 ${
                activeSection === item.href.replace("#", "")
                  ? "text-black bg-black/5"
                  : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
              }`}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden p-2 raleway bg-white/50 rounded-lg backdrop-blur-sm border border-white/20 shadow-sm"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
