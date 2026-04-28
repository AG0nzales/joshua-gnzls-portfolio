import React from "react";

const experience = [
  {
    id: 1,
    title: "Awesome CX, Transcom",
    subtitle: "Full Stack Developer",
    year: "2023-2024",
  },
  {
    id: 2,
    title: "Awesome CX, Transcom",
    subtitle: "Web Developer Intern",
    year: "2023",
  },
  {
    id: 3,
    title: "Freelance Developer",
    subtitle: "Web Developer",
    year: "2022-2023",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 raleway text-center">Work Experience</h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experience.map((job) => (
            <div key={job.id} className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 p-8 hover:shadow-2xl hover:shadow-black/15 transition-all hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold raleway">{job.title}</h3>
                <span className="text-gray-700 raleway bg-black/5 px-4 py-1.5 rounded-full text-sm mt-2 md:mt-0 border border-white/30">{job.year}</span>
              </div>
              <p className="text-gray-700 raleway">{job.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
