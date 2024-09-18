"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="p-10 flex flex-col items-start justify-center min-h-screen mt-20 sm:mt-20 max-w-sm:mt-20 lg:mt-2 max-w-lg:mt-2">
      <div className="main-header-container ml-auto sm:ml-auto lg:ml-80">
        <span className="text-xs text-gray-400 raleway font-normal tracking-normal sm:tracking-normal lg:tracking-[0.2em] ml-1 sm:ml-1 sm:font-normal lg:ml-14 lg:font-semibold">
          ITS SLOW BUT ITS PROGRESS...
        </span>
        <div className="relative mt-2">
          <Image
            src="/window-josh.png"
            alt="Joshua Andre Gonzales"
            width={1200}
            height={1200}
            quality={100}
            priority
            className="image-me hidden sm:hidden lg:block"
          />
          <Image
            src="/assets/window12.png"
            alt="Joshua Andre Gonzales"
            width={1400}
            height={1400}
            quality={100}
            className="image-me2 block sm:block lg:hidden"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" /> */}
        </div>
      </div>
      <motion.section
        className="w-full max-w-4xl place-self-center space-y-10 overflow-y-auto mt-1 sm:mt-1 lg:mt-20"
        initial={{ opacity: 0, translateY: 25 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="infosec-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <div className="image-container w-full">
              <div className="relative hidden sm:hidden lg:block">
                <Image
                  src="/assets/window22.png"
                  alt="Joshua Andre Gonzales"
                  width={800}
                  height={1000}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none top-left-fog" />
                <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent pointer-events-none bottom-right-fog" /> */}
              </div>
            </div>
            <div className="content-container w-full flex flex-col gap-8">
              <span className="raleway text-xs font-semibold text-gray-400 tracking-[0.2em]">
                INFO
              </span>
              <span className="raleway text-xs">
                I'm a software developer, living in Philippines.
              </span>
              <span className="raleway text-xs leading-5">
                I've been designing and developing websites, focusing on
                creating functional, user-friendly sites. I'm also exploring
                Machine Learning and AI, with a strong interest in LLM projects.
                My curiosity drives me to enhance user experiences and
                experiment with existing ML models. Though early in my journey,
                I'm excited to continue exploring.
              </span>
              <span className="raleway text-xs leading-5">
                My uniqueness in design and development comes from following
                Swiss Style, known for its clean, structured layouts that
                enhance clarity and user experience. This approach makes
                websites both functional and visually appealing. My rule of
                thumb: fewer clicks, less tricks.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <hr className="border border-gray-200 opacity-50 w-full mt-10" />
          <div className="mt-5 mb-5" />
          <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
            EDUCATION
          </span>
        </div>
        <div className="education-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <div className="content-container w-full flex items-center">
              <div className="flex flex-col gap-2">
                <span className="raleway text-xl font-bold">
                  University of the Immaculate Conception
                </span>
                <span className="raleway text-xl font-bold text-gray-400">
                  College of Computer Studies
                </span>
                <span className="raleway text-xs mt-3">
                  Bachelor of Science in Computer Science (BSCS)
                </span>
                <span className="raleway text-xs">
                  Specializing in Healthcare Informatics
                </span>
              </div>
            </div>
            <div className="image-container w-full flex flex-col gap-3">
              <div className="relative">
                <Image
                  src="/uic.png"
                  alt="UYniversity of the Immaculate Conception"
                  width={400}
                  height={1000}
                  className="rounded-lg mb-2"
                  style={{ width: "auto", height: "auto" }}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent pointer-events-none" /> */}
              </div>
              <span className="raleway text-xs leading-5">
                Father Selga Campus on a normal day
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <hr className="border border-gray-200 opacity-50 w-full mt-10" />
          <div className="mt-5 mb-5" />
          <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
            HANDLED TECHNOLOGIES
          </span>
        </div>
        <div className="technologies-container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5 sm:gap-5 lg:gap-8">
          <div className="flex flex-col gap-1">
            <span className="raleway text-sm font-semibold">Designing</span>
            <ul className="space-y-1 mt-2">
              <li className="raleway text-xs">Figma</li>
              <li className="raleway text-xs">Webflow</li>
              <li className="raleway text-xs">Photoshop</li>
              <li className="raleway text-xs">Canva</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <span className="raleway text-sm font-semibold">Technologies</span>
            <ul className="space-y-1 mt-2">
              <li className="raleway text-xs">Git</li>
              <li className="raleway text-xs">MySQL</li>
              <li className="raleway text-xs">PostgreSQL</li>
              <li className="raleway text-xs">Firebase</li>
              <li className="raleway text-xs">Docker</li>
              <li className="raleway text-xs">Google Cloud Platform</li>
              <li className="raleway text-xs">Tailwind</li>
              <li className="raleway text-xs">Sass</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <span className="raleway text-sm font-semibold">Frameworks</span>
            <ul className="space-y-1 mt-2">
              <li className="raleway text-xs">Flask</li>
              <li className="raleway text-xs">CodeIgniter4</li>
              <li className="raleway text-xs">Reactjs</li>
              <li className="raleway text-xs">Vuejs</li>
              <li className="raleway text-xs">Nextjs</li>
              <li className="raleway text-xs">Django</li>
              <li className="raleway text-xs">Unity</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <span className="raleway text-sm font-semibold">Languages</span>
            <ul className="mt-2">
              <li className="raleway text-xs">Python</li>
              <li className="raleway text-xs">PHP</li>
              <li className="raleway text-xs">Java</li>
              <li className="raleway text-xs">Javascript</li>
              <li className="raleway text-xs">Typescript</li>
              <li className="raleway text-xs">Dart</li>
              <li className="raleway text-xs">C#</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <hr className="border border-gray-200 opacity-50 w-full mt-10" />
          <div className="mt-5 mb-5" />
          <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
            PASSAGES MAKES SENSE
          </span>
        </div>
        <div className="contents-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-10">
            <div className="content-container w-full flex flex-col gap-2">
              <div className="title-texts flex flex-col gap-1">
                <span className="raleway text-xs font-semibold tracking-[0.1em]">
                  Wabi Sabi
                </span>
                <span className="raleway text-xs text-gray-400 font-semibold">
                  Japanese Wisdom for a Perfectly Imperfect Life
                </span>
              </div>
              <span className="raleway text-xs leading-6">
                A passage once said, the essence of wabi sabi is about seeing
                the world through your heart rather than your head. It's all
                about accepting things as they are and letting go. It invites
                you to appreciate the beauty in your life at any moment and
                strip away what's unnecessary to find what's truly meaningful.
                This ancient Japanese wisdom teaches us to find joy in our
                perfectly imperfect lives.
              </span>
            </div>
            <div className="content-container w-full flex flex-col gap-2">
              <div className="title-texts flex flex-col gap-1">
                <span className="raleway text-xs font-semibold tracking-[0.1em]">
                  Ikigai
                </span>
                <span className="raleway text-xs text-gray-400 font-semibold">
                  The Japanese Secret to a Long and Happy Life
                </span>
              </div>
              <span className="raleway text-xs leading-6">
                You know, to really get into a state of flow, you shouldn't
                rush. The Japanese have this concept called 'hasten slowly'—it's
                like saying 'hurry up but take your time.' It means great things
                take time and consistent effort. We should savor life and its
                moments instead of rushing through everything. So, try to slow
                down a bit and enjoy whatever you're doing, really be in the
                moment. That's one of the secrets to living a long, fulfilling,
                and happy life.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-transparent h-8 hidden sm:hidden lg:block" />

        <div className="things-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <div className="content-container w-full flex items-start">
              <div className="flex flex-col gap-2 mt-8">
                <span className="raleway text-xs font-semibold text-gray-400 tracking-[0.1em]">
                  THINGS I LOVE TO DO
                </span>
                <div className="texts-container mt-3 flex flex-col">
                  <span className="raleway text-2xl font-bold">
                    Capturing aesthetic views
                  </span>
                  <span className="raleway text-2xl font-bold">
                    Random Photographies
                  </span>
                  <span className="raleway text-2xl font-bold">
                    Enhaling genuine air
                  </span>
                </div>
              </div>
            </div>
            <div className="image-container w-full hidden sm:hidden lg:block">
              <div className="relative">
                <Image
                  src="/window3.png"
                  alt="Joshua Andre Gonzales"
                  width={800}
                  height={1000}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none top-left-fog" />
                <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent pointer-events-none bottom-right-fog" /> */}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;
