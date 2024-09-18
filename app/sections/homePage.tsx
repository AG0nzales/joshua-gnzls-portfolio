"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CraftsBox from "../components/craftsBox";
import CraftsBoxTwo from "../components/craftBoxTwo";
import CraftsBoxExternal from "../components/craftsBoxExternal";

const HomePage = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col gap-5 mt-20 sm:mt-20 max-w-sm:mt-20 lg:mt-2 max-w-lg:mt-2"
    >
      <div className="px-4 py-2 lg:px-14 lg:py-10 max-w-lg:px-14 max-w-lg:py-10 sm:px-4 sm:py-2 max-w-sm:px-4 max-w-sm:py-2">
        <div className="flex flex-col gap-8">
          <div className="block">
            <span className="raleway text-[#AAAAAA] text-lg sm:text-lg lg:text-xl font-semibold">
              Hello there,
              <span className="text-black font-normal">歓迎 !</span>
            </span>
            <sup
              className="raleway text-sm font-semibold align-super"
              style={{ position: "relative", top: "-0.5em" }}
            >
              /yōkoso/
            </sup>
          </div>

          <div className="block leading-normal">
            <span className="text-xl max-w-lg:text-5xl lg:text-5xl sm:text-xl max-w-sm:text-xl font-semibold leading-tight bg-gradient-to-r from-[#8d8d8d] to-[#333333] bg-clip-text text-transparent">
              I am a software developer creating world-class applications with
              Swiss Style design. This minimalist, grid-based approach enhances
              clarity and functionality.
            </span>
          </div>
        </div>
        <div className="craft-container">
          <hr className="border border-gray-200 opacity-50 w-full mb-2 mt-10" />
          <span className="raleway leading-3 text-xs text-gray-400 font-semibold tracking-[0.2em]">
            CRAFT
          </span>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="flex flex-col gap-8">
              <motion.div
                className="motion-div"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.9 }}
              >
                <CraftsBox
                  pageLink="/cnltk"
                  imageSrc="/assets/mockup-cnltk.png"
                  imageWidth={800}
                  imageHeight={800}
                  title="Cebuano Natural Language Toolkit"
                  subTitle="NLP for Cebuano"
                  date="2022"
                />
              </motion.div>
              <motion.div
                className="motion-div"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }}
              >
                <CraftsBoxTwo
                  pageLink="/contextquiz"
                  imageSrc="/assets/contextquiz-mockgif-new1.gif"
                  imageSrcTwo="/assets/contextquiz-mockimage.png"
                  imageWidth={600}
                  imageHeight={400}
                  imageWidthTwo={600}
                  imageHeightTwo={400}
                  title="Context Quiz Generator"
                  subTitle="Open AI API"
                  date="2023"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-8">
              <motion.div
                className="motion-div"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.2 }}
              >
                <CraftsBox
                  pageLink="/chatpdf"
                  imageSrc="/assets/chatpdf-mockup-mobile.gif"
                  imageWidth={400}
                  imageHeight={300}
                  title="ChatPDF"
                  subTitle="OpenAI"
                  date="2023"
                />
              </motion.div>

              <motion.div
                className="motion-div"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.4 }}
              >
                <CraftsBox
                  pageLink="/interfaces"
                  imageSrc="/assets/interfaces-mockup.png"
                  imageWidth={800}
                  imageHeight={800}
                  title="Interfaces for Businesses"
                  subTitle="Web & Brand"
                  date="2023"
                />
              </motion.div>
              <motion.div
                className="motion-div"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.8 }}
              >
                <CraftsBox
                  pageLink="/aweqfy"
                  imageSrc="/assets/aweqfy.png"
                  imageWidth={800}
                  imageHeight={1500}
                  title="Awesome Queuing System (AweQfy)"
                  subTitle="Automating the manual"
                  date="2023"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-8">
              <motion.div
                className="motion-component"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.4 }}
              >
                <CraftsBoxExternal
                  pageLink="https://product-marketing-tpp.vercel.app"
                  imageSrc="/assets/services-mockhand2.png"
                  imageWidth={400}
                  imageHeight={400}
                  title="Product Business Design"
                  subTitle2="Landing Page"
                  date="2022"
                />
              </motion.div>
              <motion.div
                className="motion-div"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.8 }}
              >
                <CraftsBox
                  pageLink="/ideas"
                  imageSrc="/assets/mockup-ideas.png"
                  imageWidth={800}
                  imageHeight={800}
                  title="Creative Design Projects"
                  subTitle="Ideas"
                  date="2023"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="border-t py-7 px-14 hidden lg:block max-w-lg:block sm:hidden max-w-sm:hidden">
          <span className="text-gray-500 text-sm">Joshua Gnzls</span>
          <span className="ml-10 raleway text-gray-500 text-sm">© 2024</span>
        </div>

        <div className="border border-t-gray-200 border-r-transparent border-l-transparent border-b-transparent py-6 px-4 flex items-center lg:hidden max-w-lg:hidden sm:block max-w-sm:block">
          <span className="text-gray-500 text-sm font-semibold">JG.2024</span>
          <div className="ml-auto flex gap-4">
            <span className="w-full py-2 text-sm text-gray-500 hover:opacity-50 cursor-pointer raleway">
              Mail
            </span>

            <span className="w-full py-2 text-sm text-gray-500 hover:opacity-50 cursor-pointer raleway">
              LinkedIn
            </span>

            <span className="w-full py-2 text-sm text-gray-500 hover:opacity-50 cursor-pointer raleway">
              Github
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
