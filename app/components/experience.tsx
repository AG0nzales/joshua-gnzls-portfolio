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
    company: "Company Placeholder",
    position: "Software Engineer",
    location: "Remote, United States",
    period: "Feb 2024 - Present",
    date: "",
    employmentType: "FULL TIME",
    contributions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    ],
    technologies: [
      "React",
      "Typescript",
      "PHP",
      "CodeIgniter",
      "GCP",
      "Docker",
    ],
  },
  {
    id: 2,
    company: "Company Placeholder",
    position: "Software Developer",
    location: "New York, USA",
    period: "Jan 2022 - Jan 2024",
    date: "",
    employmentType: "FULL TIME",
    contributions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    technologies: ["JavaScript", "Node.js", "Python", "AWS", "PostgreSQL"],
  },
  {
    id: 3,
    company: "Company Placeholder",
    position: "Frontend Developer",
    location: "San Francisco, USA",
    period: "Jun 2020 - Dec 2021",
    date: "",
    employmentType: "FULL TIME",
    contributions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    ],
    technologies: ["Vue.js", "TypeScript", "MongoDB", "Docker", "Kubernetes"],
  },
  {
    id: 4,
    company: "Company Placeholder",
    position: "Junior Developer",
    location: "Chicago, USA",
    period: "Jan 2019 - May 2020",
    date: "",
    employmentType: "FULL TIME",
    contributions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 raleway text-center">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex items-center justify-center"
              >
                <div
                  className={`flex w-full items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2 px-8">
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
                        <span className="text-sm text-gray-600 raleway bg-black/5 px-3 py-1 rounded-full border border-white/30">
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

                  <div className="w-1/2 px-8 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-lg font-semibold text-gray-700 raleway">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
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
