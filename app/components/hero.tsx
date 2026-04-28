"use client";

import React from "react";
import { Link } from "react-aria-components";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative z-10"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-black/10 p-12 md:p-20">
          {/* <div className="mb-10 flex items-center justify-center gap-6">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center text-white text-5xl font-bold raleway shadow-xl shadow-black/20 rotate-3 hover:rotate-0 transition-transform duration-300">
              JG
            </div>
            <div className="hidden md:block h-28 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-semibold text-blue-600 raleway tracking-widest uppercase mb-1">
                Welcome!
              </p>
              <p className="text-gray-500 raleway text-xs">BUILT PROGRESS</p>
            </div>
          </div> */}

          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://github.com/AG0nzales"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-andre-gonzales"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:gonzalesjoshdre@gmail.com"
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 raleway tracking-tight">
            Joshua Gonzales
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 raleway text-gray-700">
            Software Engineer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 raleway leading-relaxed max-w-3xl mx-auto">
            Build practical, high-performance web apps that scale, streamline
            systems, and improve workflows.
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-medium raleway">
                Davao City, Philippines
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium raleway">Open to Work</span>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold raleway hover:from-blue-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-white/50 text-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 border-2 border-gray-300 bg-stone-50/50 text-gray-700 rounded-xl font-semibold raleway hover:border-gray-400 hover:bg-stone-100/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:ring-offset-2 focus:ring-offset-white/50 text-center backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div> */}
        </div>

        <div
          className="mt-12 flex justify-center animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => {
            const element = document.getElementById("projects");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] border-2 border-gray-300 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
