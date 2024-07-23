"use client";

import React from "react";
import { motion } from "framer-motion";

const cv = [
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

const CV = () => {
  return (
    <main className="p-10 flex items-start justify-center mt-20 sm:mt-20 max-w-sm:mt-20 lg:mt-1 max-w-lg:mt-1">
      <section className="w-full max-w-4xl overflow-y-auto grid grid-cols-4">
        <div className="w-full">
          <span className="text-gray-400 raleway text-xs font-semibold tracking-[0.2em]">
            CV
          </span>
        </div>
        <div className="w-full col-span-3 grid grid-cols-1 gap-12 overflow-hidden">
          {cv.map((job, i) => (
            <motion.div
              key={job.id}
              className="flex"
              initial={{ opacity: 0, translateY: 25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <span className="flex flex-col">
                <span className="text-xs font-semibold">{job.title}</span>
                <span className="text-gray-400 text-xs">{job.subtitle}</span>
              </span>
              <span className="ml-auto text-gray-400 text-xs">{job.year}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CV;
