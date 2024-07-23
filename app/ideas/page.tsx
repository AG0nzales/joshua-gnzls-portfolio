"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ideas = [
  {
    id: 1,
    link: "/outfit-recommender",
    title: "Outfit recommender",
    year: 2023,
  },
  { id: 2, link: "/wha2cook", title: "Wha2Cook", year: 2023 },
];

const Ideas = () => {
  return (
    <main className="p-10 flex items-start justify-center mt-20 sm:mt-20 max-w-sm:mt-20 lg:mt-2 max-w-lg:mt-2">
      <section className="w-full max-w-3xl space-y-6 overflow-y-auto">
        <div className="w-full flex flex-col gap-8">
          <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
            SPECULATIVE
          </span>
          <div className="title-container flex flex-col gap-5">
            <span className="raleway text-4xl font-semibold">
              Ideas about projects
            </span>
            <span className="raleway text-xs">
              Some draft ideas about projects that I've thought of and decided
              to maybe start building for fun.
            </span>
          </div>
          <hr className="border border-gray-200 opacity-50 w-full mt-5 mb-5" />
        </div>
        <div className="w-full grid grid-cols-1 gap-3 overflow-hidden">
          {ideas.map((idea, i) => (
            <motion.div
              key={idea.id}
              className="w-full flex"
              initial={{ opacity: 0, translateY: 25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <Link href={idea.link} className="w-fit">
                <span className="hover:opacity-50 font-semibold text-lg">
                  {idea.title}
                </span>
              </Link>
              <Link href={idea.link} className="w-min ml-auto">
                <span className="text-xs">{idea.year}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Ideas;
