"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Cnltk = () => {
  return (
    <main className="cnltk-page">
      <div className="image-contain bg-gray-100 flex items-center justify-center">
        <Image
          src="/assets/mockup-cnltk.png"
          alt="CNLTK"
          width={800}
          height={800}
          quality={100}
          className="image-me rounded-lg m-20 mt-24 mb-24"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="border-b">
        <section className="p-10 flex items-start justify-center bg-gray-50 ">
          <div className="w-full max-w-4xl space-y-6 overflow-y-auto">
            <div className="w-full flex flex-col gap-8">
              <div className="title-container flex flex-col gap-5">
                <span className="raleway text-3xl font-semibold sm:text-lg lg:text-5xl">
                  Cebuano Natural Language Toolkit
                </span>
                <span className="raleway text-sm text-gray-400 font-semibold">
                  NLP Tool for Cebuano Language with Named Entity Recognition
                  and Part of Speech Tagging
                </span>
              </div>
            </div>
            <div className="contexts-section">
              <hr className="border border-gray-200 opacity-50 w-full mt-14 mb-5" />

              <span className="raleway text-sm">
                This project is a product of my thesis study during college. The
                project aims to create a Natural Language Processing tool for
                the Cebuano language. The tool is able to perform Named Entity
                Recognition and Part of Speech Tagging for the Cebuano language.
              </span>
              <hr className="border border-gray-200 opacity-50 w-full mt-14 mb-5" />

              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5 sm:gap-5 lg:gap-10">
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">
                    Timeline
                  </span>
                  <span className="raleway text-xs">Aug - Dec 2022</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">Team</span>
                  <span className="raleway text-xs">Joshua Gonzales</span>
                  <span className="raleway text-xs">Glenn Nituda</span>
                  <span className="raleway text-xs">J-Adrielle Gustilo</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">
                    Technology & Tools
                  </span>
                  <span className="raleway text-xs">Google Colab</span>
                  <span className="raleway text-xs">Google Cloud Platform</span>
                  <span className="raleway text-xs">Flask</span>
                  <span className="raleway text-xs">React</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">
                    Language
                  </span>
                  <span className="raleway text-xs">Python</span>
                  <span className="raleway text-xs">Javascript</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-8">
              <hr className="border border-gray-200 opacity-50 w-full mt-14 mb-5" />
              <div className="w-full flex flex-col gap-1">
                <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
                  Sample Usage
                </span>
                <span className="raleway text-3xl font-semibold">
                  Code Snippet for Part of Speech Tagging in Cebuano Language in
                  Python using CNLTK Library.
                </span>
              </div>
              <div className="w-full border rounded-lg bg-gray-100 flex items-center justify-center">
                <Image
                  src="/assets/pos2.png"
                  alt="pos tagger"
                  width={800}
                  height={800}
                  quality={100}
                  className="image-me  rounded-lg m-20 mt-10 mb-10"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="context-container">
                <span className="raleway text-sm leading-6">
                  The code snippet above shows how to use the CNLTK library to
                  do Part of Speech Tagging in Cebuano Language. The code
                  snippet is written in Python and uses the CNLTK library to
                  perform the Part of Speech Tagging. The CNLTK library is a
                  Natural Language Processing library for the Cebuano language.
                  The library provides tools for Named Entity Recognition, Part
                  of Speech Tagging, and other NLP tasks for the Cebuano
                  language.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="image-contain bg-gray-100 flex items-center justify-center">
        <Image
          src="/assets/confer.png"
          alt="aiccc"
          width={1200}
          height={1000}
          quality={100}
          className="image-me rounded-lg m-20 mt-32 mb-32 hidden sm:hidden lg:block"
        />
        <Image
          src="/assets/confer2.png"
          alt="aiccc"
          width={600}
          height={1000}
          quality={100}
          className="image-me rounded-lg m-20 mt-10 mb-10 block sm:block sm:mt-10 sm:mb-10 lg:mt-32 lg:mb-32 lg:hidden"
        />
      </div>
      <div className="border-b">
        <section className="p-10 flex items-start justify-center bg-gray-50 ">
          <div className="w-full max-w-4xl space-y-6 overflow-y-auto">
            <div className="w-full flex flex-col gap-1">
              <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
                Artificial Intelligence & Cloud Computing Conference 2022
              </span>
              <span className="raleway text-3xl font-semibold">
                Developing a Hybrid Neural Network for Part-Of-Speech Tagging
                and Named Entity Recognition
              </span>
            </div>
            <div className="contexts-section flex flex-col gap-5">
              <div className="flex flex-col gap-2 mt-5">
                <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
                  Overview
                </span>
                <span className="raleway text-sm leading-6">
                  We journeyed to Osaka, Japan, to present our study at the
                  Artificial Intelligence & Cloud Computing Conference 2022.
                  Despite our lack of experience in Natural Language Processing,
                  our work was recognized internationally. AICCC 2022 was the
                  first to accept our study, allowing us to present to
                  researchers and professors. We received valuable feedback,
                  made connections, and learned from others. This was a
                  significant milestone for us as young students.
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
                  Study Overview
                </span>
                <span className="raleway text-sm leading-6">
                  As we advance towards the next industrial revolutions,
                  enabling computers to understand human languages is essential.
                  Significant progress has been made, particularly for languages
                  like English, French, and German, with tools like the Natural
                  Language Toolkit offering invaluable resources for NLP
                  researchers. In the Philippines, efforts focus on enhancing
                  NLP for the Filipino language. This paper introduces a
                  sophisticated hybrid neural network model for POS Tagging and
                  NER tasks, integrating the best features of current
                  architectures, and provides initial experimental results.
                </span>
              </div>
              <div className="w-full border rounded-lg bg-gray-100 flex items-center justify-center">
                <Image
                  src="/assets/conf.jpg"
                  alt="osaka international conference"
                  width={600}
                  height={600}
                  quality={100}
                  className="image-me  rounded-lg m-20 mt-10 mb-10"
                />
              </div>
              <div className="flex items-center justify-center mt-5">
                <Link
                  href="https://dl.acm.org/doi/10.1145/3582099.3582101"
                  target="_blank"
                >
                  <motion.button
                    type="button"
                    className="hover:opacity-50"
                    whileHover={{
                      scale: 1.02,
                      originX: 0,
                    }}
                  >
                    <span className="flex gap-3 justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>{" "}
                      Read Article
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cnltk;
