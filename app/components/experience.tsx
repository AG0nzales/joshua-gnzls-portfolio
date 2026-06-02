import React from "react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  date: string;
  employmentType: string;
  contributions: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Freelance",
    position: "Software Engineer",
    location: "Remote, United States",
    period: "Jan 2025 - Apr 2026",
    date: "",
    employmentType: "FULL TIME",
    contributions: [
      "Shipped automated payroll and time-tracking modules to improve workforce management.",
      "Managed end-to-end development of client-specific modules, including database modeling and business logic implementation.",
      "Built Cypress testing suites to verify feature functionality and prevent production regressions.",
    ],
    technologies: [
      "Next",
      "Typescript",
      "CodeIgniter",
      "PHP",
      "GCP",
      "Docker",
      "GLM",
    ],
  },
  {
    id: 2,
    company: "Freelance",
    position: "Software Engineer",
    location: "Remote, United States",
    period: "Aug 2024 - June 2025",
    date: "",
    employmentType: "FULL TIME",
    contributions: [
      "Managed full-stack development during a legacy migration, implementing new system capabilities and modernizing the user interface.",
      "Implemented core CRM features in Next.js, including secure authentication and WebSockets for seamless real-time data synchronization.",
    ],
    technologies: [
      "Next",
      "Typescript",
      "CodeIgniter",
      "PHP",
      "MySQL",
      "Claude",
    ],
  },
  {
    id: 3,
    company: "Awesome CX, Transcom",
    position: "Web Developer",
    location: "Davao City, Philippines",
    period: "Jan 2023 - Aug 2025",
    date: "",
    employmentType: "FULL TIME",
    contributions: [
      "Rebuilt a legacy CRM into a React-based SPA, leveraging Redux and Vite to enhance system speed and usability.",
      "Redesigned the database schema and migrated to a relational database, improving system performance and user retention",
      "Designed and implemented a queueing system for applicant management as an engineering intern.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "CodeIgniter",
      "PHP",
      "MySQL",
      "Docker",
    ],
  },
  {
    id: 4,
    company: "Freelance",
    position: "Junior Web Developer",
    location: "Singapore",
    period: "Oct-Dec 2022",
    date: "",
    employmentType: "CONTRACTUAL",
    contributions: [
      "Led the frontend team in designing the project’s technical architecture and infrastructure",
      "Built the appointment scheduling interface for a medical practice management tool.",
    ],
    technologies: ["React", "TypesScript", "Chakra", "Supabase"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 raleway text-center">
            Work Experience
          </h2>
          <p className="text-gray-600 text-center max-w-2xl raleway leading-relaxed">
            My professional journey, key contributions, and technologies I've
            worked with
          </p>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-transparent via-[#e8dfd0] to-transparent rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex items-center md:justify-center"
              >
                <div
                  className={`flex w-full md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="pl-12 md:w-1/2 md:px-8">
                    <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl p-6 hover:rotate-1 transition-all hover:shadow-2xl duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-[#f5f0e6] rounded-lg flex items-center justify-center border border-[#e8dfd0]">
                            <svg
                              className="w-5 h-5 text-[#c9956c]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            {exp.employmentType}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 raleway bg-black/5 px-3 py-1 rounded-full border border-dashed border-gray-400">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold raleway mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-gray-700 raleway mb-2">
                        {exp.position}
                      </p>

                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
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
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.contributions.map((contribution, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-gray-200 my-4"></div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5f0e6] text-gray-800 text-xs font-medium raleway rounded-full border border-[#e8dfd0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2 px-8 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-lg font-semibold text-gray-700 raleway">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
