import React from "react";

const TechnicalCompetencies = () => {
  return (
    <section
      id="technical-competencies"
      className="min-h-screen py-20 relative z-10"
    >
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 raleway text-center">
            Technical Competencies
          </h2>
          <p className="text-gray-600 text-center max-w-2xl raleway leading-relaxed">
            My technical expertise across programming languages, frameworks, and
            tools that power my development projects
          </p>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-transparent via-[#e8dfd0] to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-6 flex flex-col hover:rotate-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0] flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
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
              <h3 className="text-lg font-bold raleway">
                Programming Languages
              </h3>
            </div>
            <p className="text-gray-600 raleway text-sm leading-relaxed mb-4">
              Proficient in multiple programming languages for diverse
              development needs
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  JavaScript
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  TypeScript
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">PHP</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Python</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Java</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">C#</span>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-6 flex flex-col hover:rotate-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0] flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold raleway">
                Frontend Technologies
              </h3>
            </div>
            <p className="text-gray-600 raleway text-sm leading-relaxed mb-4">
              Modern frontend libraries and frameworks for creating enticing
              user interfaces
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">React</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Next</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Tailwind</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  React Aria
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">ShadCN</span>
              </div>
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  MaterialUI
                </span>
              </div> */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  Material Tailwind
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-6 flex flex-col hover:rotate-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0] flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold raleway">Backend & Databases</h3>
            </div>
            <p className="text-gray-600 raleway text-sm leading-relaxed mb-4">
              Proficient with robust backend technologies and database systems
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">MySQL</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  PostgreSQL
                </span>
              </div>
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">SQLite</span>
              </div> */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Supabase</span>
              </div>
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Firebase</span>
              </div> */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  CodeIgniter
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Node</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Express</span>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-6 flex flex-col hover:rotate-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0] flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold raleway">
                Cloud & Version Control
              </h3>
            </div>
            <p className="text-gray-600 raleway text-sm leading-relaxed mb-4">
              End-to-End Deployment & Containerized Infrastructure
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">GCP</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">AWS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Git</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  Azure Bitbucket
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">
                  Docker Compose
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-6 flex flex-col hover:rotate-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0] flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold raleway">AI/ML & Automation</h3>
            </div>
            <p className="text-gray-600 raleway text-sm leading-relaxed mb-4">
              Intelligent Systems & Neural Architectures.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">OpenAI</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Gemini</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">n8n</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Cypress</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">NLTK</span>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 p-6 flex flex-col hover:rotate-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] flex items-center justify-center shadow-lg border border-[#e8dfd0] flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold raleway">Workflow Essentials</h3>
            </div>
            <p className="text-gray-600 raleway text-sm leading-relaxed mb-4">
              Development Workflow, Testing Suites, and Web Architecture
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">WordPress</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Shopify</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Storybook</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5f0e6] text-gray-800 rounded-full border border-[#e8dfd0]">
                <span className="text-xs font-semibold raleway">Jest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCompetencies;
