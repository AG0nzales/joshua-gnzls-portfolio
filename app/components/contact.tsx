"use client";

import React from "react";
import { TextField, Button, Link } from "react-aria-components";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] border-2 border-[#e8dfd0] flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 raleway text-center">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center max-w-2xl raleway leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear
            from you
          </p>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-transparent via-[#e8dfd0] to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-8 flex flex-col h-full">
            <p className="text-lg raleway leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 raleway">
                    Email
                  </h3>
                  <Link
                    href="mailto:gonzalesjoshdre@gmail.com"
                    className="text-gray-700 raleway hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/50 rounded"
                  >
                    gonzalesjoshdre@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 raleway">
                    Phone
                  </h3>
                  <p className="text-gray-700 raleway">(+63) 9052450984</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 raleway">
                    Location
                  </h3>
                  <p className="text-gray-700 raleway">
                    Davao City, Philippines
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4 raleway">
                Socials
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://www.github.com/AG0nzales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f5f0e6] transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-gray-800 raleway">
                      GitHub
                    </span>
                    <p className="text-xs text-gray-600 raleway">
                      @AG0nzales
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/joshua-andre-gonzales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f5f0e6] transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-gray-800 raleway">
                      LinkedIn
                    </span>
                    <p className="text-xs text-gray-600 raleway">
                      joshua-andre-gonzales
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-8 relative">
            <h3 className="text-2xl font-bold mb-6 raleway">Send a Message</h3>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-100/30 backdrop-blur-[2px] rounded-2xl z-10 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="inline-block p-4 bg-white/80 rounded-full mb-3 shadow-sm">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium raleway text-lg">
                    Form Currently Unavailable
                  </p>
                  <p className="text-gray-500 raleway text-sm mt-1">
                    Please reach out via email directly
                  </p>
                </div>
              </div>
              <form className="space-y-4 opacity-50 pointer-events-none">
                <TextField>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 raleway text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    disabled
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent raleway cursor-not-allowed"
                    placeholder="Your name"
                  />
                </TextField>
                <TextField>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 raleway text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    disabled
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent raleway cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </TextField>
                <TextField>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 raleway text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    disabled
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent raleway resize-none cursor-not-allowed"
                    placeholder="Your message..."
                  />
                </TextField>
                <Button
                  type="submit"
                  isDisabled
                  className="w-full px-8 py-3 bg-gray-400/70 text-white rounded-xl font-medium raleway cursor-not-allowed shadow-md"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
