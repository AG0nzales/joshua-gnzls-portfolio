import React from "react";

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 relative z-10">
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 raleway text-center">
            Education & Recognition
          </h2>
          <p className="text-gray-600 text-center max-w-2xl raleway leading-relaxed">
            My academic journey, key coursework, and recognition for
            contributions to the tech community
          </p>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-transparent via-[#e8dfd0] to-transparent rounded-full"></div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 raleway text-center">
            Academic Credentials
          </h3>
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
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
                <h4 className="text-xl font-bold raleway mb-1">
                  University of the Immaculate Conception
                </h4>
                <p className="text-gray-600 raleway mb-3">
                  Bachelor of Science in Computer Science
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600 raleway">
                  <div className="flex items-center gap-2">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>2019-2023</span>
                  </div>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <div className="flex items-center gap-2">
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
                    <span>Davao City, Philippines</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 raleway leading-relaxed mb-6">
              Graduated with flying colors, maintaining excellence in academic
              fundamentals and professionalism while being active in the city
              developer community and university officer duties
            </p>
            <div>
              <h5 className="text-sm font-semibold raleway mb-4">
                Key Courses:
              </h5>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                  <span className="text-xs font-semibold raleway">
                    Data Structures and Algorithms
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                  <span className="text-xs font-semibold raleway">
                    Machine Learning
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                  <span className="text-xs font-semibold raleway">
                    Artificial Intelligence
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                  <span className="text-xs font-semibold raleway">
                    Software Engineering
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                  <span className="text-xs font-semibold raleway">
                    Object-Oriented Programming
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                  <span className="text-xs font-semibold raleway">
                    Data Analytics
                  </span>
                </div>
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                  <span className="text-xs font-semibold raleway">Natural Language Processing</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 raleway text-center">
            Conferences & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-6">
              <div className="flex items-start gap-4">
                {/* <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div> */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold raleway">
                      AI & Cloud Computing Conference 2022
                    </h4>
                    <div className="inline-flex items-center px-3 py-1 border border-dashed border-gray-400 text-gray-700 rounded-full">
                      <span className="text-xs font-medium raleway">
                        Dec 2022
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-4 h-4 text-gray-500"
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
                    <p className="text-sm text-gray-600 raleway">
                      Osaka, Japan
                    </p>
                  </div>
                  <p className="text-gray-600 raleway leading-relaxed text-sm">
                    Developed and showcased research on hybrid neural network
                    architectures using Cebuano datasets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-6">
              <div className="flex items-start gap-4">
                {/* <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0]">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div> */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold raleway">
                      TOPCIT Level 2
                    </h4>
                    <div className="inline-flex items-center px-3 py-1 border border-dashed border-gray-400 text-gray-700 rounded-full">
                      <span className="text-xs font-medium raleway">
                        Dec 2022
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-4 h-4 text-gray-500"
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
                    <p className="text-sm text-gray-600 raleway">
                      Davao City, Philippines
                    </p>
                  </div>
                  <p className="text-gray-600 raleway leading-relaxed text-sm">
                    Certified Level 2 in TOPCIT Philippines, a performance-based
                    assessment of practical ICT and software development
                    competencies.
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

export default Education;
