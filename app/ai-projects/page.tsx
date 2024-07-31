"use client";

import React from "react";
import { motion } from "framer-motion";
import CraftsBox from "../components/craftsBox";

const AiProjects = () => {
  return (
    <main className="p-10 flex items-center justify-center">
      <section className="w-full max-w-4xl space-y-6 overflow-y-auto">
        <div className="w-full flex flex-col gap-8 mt-16 sm:mt-16 lg:mt-1">
          <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
            AI Projects
          </span>
          <div className="title-container flex flex-col gap-5">
            <span className="raleway text-4xl font-semibold">
              Integrating OpenAI in fun projects
            </span>
            <span className="raleway text-xs">
              Some projects I've worked on using OpenAI API. These projects are
              built using different technologies to see how they can be
              integrated with OpenAI API.
            </span>
          </div>
          <hr className="border border-gray-200 opacity-50 w-full mt-5 mb-5" />
        </div>
        <div className="mt-5 p-2 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4 overflow-hidden">
          <motion.div
            className="motion-div"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CraftsBox
              pageLink="/chatpdf"
              imageSrc="/assets/chatpdf-mockup.png"
              imageWidth={800}
              imageHeight={800}
              title="AI Projects"
              subTitle2="Nextjs, TailwindCSS, Clerk, OpenAI"
              date="2023"
            />
          </motion.div>
          <motion.div
            className="motion-component"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CraftsBox
              pageLink="/contextquiz"
              imageSrc="/assets/contextquiz-mockup.png"
              imageWidth={800}
              imageHeight={800}
              title="Context Quiz Generator"
              subTitle2="Python, Streamlit, OpenAI"
              date="2023"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AiProjects;
