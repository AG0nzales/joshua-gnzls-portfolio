"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CraftsBoxExternal from "../components/craftsBoxExternal";
import Link from "next/link";

const Interfaces = () => {
  return (
    <main className="p-10 flex items-center justify-center">
      <section className="w-full max-w-4xl space-y-6 overflow-y-auto">
        <Link href="/">
          <motion.button
            type="button"
            className="group flex items-center"
            whileHover={{
              scale: 1.02,
              originX: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 group-hover:text-black text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="raleway text-xs font-normal group-hover:text-black text-gray-400">
              Back
            </span>
          </motion.button>
        </Link>
        <div className="w-full flex flex-col gap-8 mt-16 sm:mt-16 lg:mt-1">
          <span className="raleway text-xs text-gray-400 font-semibold tracking-[0.2em]">
            WEB INTERFACES
          </span>
          <div className="title-container flex flex-col gap-5">
            <span className="raleway text-4xl font-semibold">
              Design projects for web interfaces
            </span>
            <span className="raleway text-xs">
              Some draft ideas for web interface projects that are
              professionally tailored for an internet presence.
            </span>
          </div>
          <hr className="border border-gray-200 opacity-50 w-full mt-5 mb-5" />
        </div>
        <div className="mt-5 p-2 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4 overflow-hidden">
          <div className="flex flex-col gap-8">
            <motion.div
              className="motion-div"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CraftsBoxExternal
                pageLink="https://ropa-tpp.vercel.app"
                imageSrc="/assets/ropa-mockup.png"
                imageWidth={800}
                imageHeight={800}
                title="Ropa Clothing Landing Page"
                subTitle="Vite Vue, Tailwind, React Aria"
                date="2024"
              />
            </motion.div>
            <motion.div
              className="motion-div"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CraftsBoxExternal
                pageLink="https://kohifrag-tpp.vercel.app"
                imageSrc="/assets/kohifrag-mockup.png"
                imageWidth={800}
                imageHeight={800}
                title="Online Cafe Business Landing Page"
                subTitle="Vite React, Tailwind, React Aria"
                date="2024"
              />
            </motion.div>
            <motion.div
              className="motion-component"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CraftsBoxExternal
                pageLink="https://seminar-template.vercel.app"
                imageSrc="/assets/seminars-mockup.png"
                imageWidth={400}
                imageHeight={400}
                title="Seminars Service Landing Page"
                subTitle="Reactjs, TailwindCSS"
                date="2022"
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div
              className="motion-div"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
            >
              <CraftsBoxExternal
                pageLink="https://latazza-tpp.vercel.app"
                imageSrc="/assets/latazza-mockup.png"
                imageWidth={400}
                imageHeight={200}
                title="Cafe Business Landing Page"
                subTitle="Reactjs, TailwindCSS"
                date="2024"
              />
            </motion.div>
            <motion.div
              className="motion-div"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
            >
              <CraftsBoxExternal
                pageLink="https://product-marketing-tpp.vercel.app"
                imageSrc="/assets/products-mockup.png"
                imageWidth={400}
                imageHeight={200}
                title="Products Business Landing Page"
                subTitle="Reactjs, TailwindCSS"
                date="2023"
              />
            </motion.div>
            <motion.div
              className="hidden"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1.4 }}
            >
              <CraftsBoxExternal
                pageLink="/interfaces"
                imageSrc="/assets/mockup-blank.png"
                imageWidth={800}
                imageHeight={800}
                title="Draft"
                subTitle="draft"
                date="2024"
              />
            </motion.div>
            <motion.div
              className="motion-div"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CraftsBoxExternal
                pageLink="https://landing-tpp.vercel.app"
                imageSrc="/assets/services-mockup.png"
                imageWidth={800}
                imageHeight={800}
                title="Service Business Landing Page"
                subTitle="Astro, CodeStitch"
                date="2023"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Interfaces;
