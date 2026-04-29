"use client";

import React from "react";
import { TextField, Button, Link } from "react-aria-components";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 raleway text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-8 space-y-6">
            <p className="text-lg raleway leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-4 border border-white/30">
                <h3 className="font-semibold mb-2 raleway">Email</h3>
                <Link
                  href="mailto:gonzalesjoshdre@gmail.com"
                  className="text-gray-700 raleway hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/50 rounded px-2 py-1"
                >
                  gonzalesjoshdre@gmail.com
                </Link>
              </div>
              <div className="bg-white/50 rounded-xl p-4 border border-white/30">
                <h3 className="font-semibold mb-2 raleway">LinkedIn</h3>
                <Link
                  href="https://www.linkedin.com/in/joshua-andre-gonzales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 raleway hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/50 rounded px-2 py-1"
                >
                  linkedin.com/in/joshua-andre-gonzales
                </Link>
              </div>
              <div className="bg-white/50 rounded-xl p-4 border border-white/30">
                <h3 className="font-semibold mb-2 raleway">GitHub</h3>
                <Link
                  href="https://www.github.com/AG0nzales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 raleway hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/50 rounded px-2 py-1"
                >
                  github.com/AG0nzales
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
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium raleway text-lg">Form Currently Unavailable</p>
                  <p className="text-gray-500 raleway text-sm mt-1">Please reach out via email directly</p>
                </div>
              </div>
              <form className="space-y-4 opacity-50 pointer-events-none">
                <TextField>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 raleway text-gray-600">
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
                  <label htmlFor="email" className="block text-sm font-medium mb-2 raleway text-gray-600">
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2 raleway text-gray-600">
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
