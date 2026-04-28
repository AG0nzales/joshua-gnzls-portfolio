import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 raleway text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-8 space-y-4">
            <p className="text-medium raleway leading-relaxed">
              I'm a software developer living in the Philippines, specializing
              in full-stack web development and AI projects.
            </p>
            <p className="text-medium raleway leading-relaxed">
              I've been designing and developing websites, focusing on creating
              functional, user-friendly sites. I'm also exploring Machine
              Learning and AI, with a strong interest in LLM projects.
            </p>
            <p className="text-medium raleway leading-relaxed">
              My uniqueness in design and development comes from following Swiss
              Style, known for its clean, structured layouts that enhance
              clarity and user experience. My rule of thumb: fewer clicks, less
              tricks.
            </p>
            <div className="flex justify-center items-center gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-sm font-medium raleway">
                  3+ Years Experience
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-sm font-medium raleway">
                  10+ Technologies
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="mb-6 flex justify-center">
              <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] border-2 border-gray-300 flex items-center justify-center overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-sm text-gray-600 font-medium raleway">
                    Your Photo Here
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-8">
              <h3 className="text-xl font-bold mb-4 raleway">Education</h3>
              <p className="font-semibold raleway">
                University of the Immaculate Conception
              </p>
              <p className="text-gray-600 raleway">
                Bachelor of Science in Computer Science
              </p>
            </div>
            {/* <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-8">
              <h3 className="text-xl font-bold mb-4 raleway">Location</h3>
              <p className="text-gray-600 raleway">Philippines</p>
            </div> */}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 raleway text-center">
            Proficiencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 raleway">
                  Full-Stack Development
                </h4>
                <p className="text-gray-600 raleway text-center mb-6 leading-relaxed">
                  Expert in building robust web applications using modern
                  frameworks and technologies.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                    <span className="text-sm font-medium raleway">React</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                    <span className="text-sm font-medium raleway">Next</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                    <span className="text-sm font-medium raleway">PHP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 raleway">Web Design</h4>
                <p className="text-gray-600 raleway text-center mb-6 leading-relaxed">
                  Creating beautiful, user-centered designs using
                  industry-standard tools and platforms.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                    <span className="text-sm font-medium raleway">Figma</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                    <span className="text-sm font-medium raleway">Webflow</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                    <span className="text-sm font-medium raleway">
                      Photoshop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 raleway text-center">
            Community & Publication
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
                  <svg
                    className="w-7 h-7 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold raleway">
                      Research Publication
                    </h4>
                    <div className="inline-flex items-center px-3 py-1 border border-dashed border-gray-400 text-gray-700 rounded-full">
                      <span className="text-xs font-medium raleway">2022</span>
                    </div>
                  </div>
                  <p className="text-gray-600 raleway leading-relaxed text-sm">
                    Presented my thesis at the Artificial Intelligence and Cloud
                    Computing Conference in Osaka, Japan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
                  <svg
                    className="w-7 h-7 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold raleway">
                      Driving Engagement
                    </h4>
                    <div className="inline-flex items-center px-3 py-1 border border-dashed border-gray-400 text-gray-700 rounded-full">
                      <span className="text-xs font-medium raleway">
                        2021-2023
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm raleway leading-relaxed">
                    Building tech communities with Google DSC and the College of
                    Computing Studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
