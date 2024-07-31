"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Wha2cook = () => {
  return (
    <main className="p-10 flex items-center justify-center mt-16 sm:mt-16 lg:mt-1">
      <section className="w-full max-w-4xl space-y-6 overflow-y-auto">
        <div className="w-full flex flex-col gap-8 overflow-hidden">
          <Link href="/ideas">
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
          <div className="title-container flex flex-col gap-5 mt-5">
            <div className="flex justify-between items-center">
              <span className="raleway text-2xl font-semibold">Wha2Cook</span>
              <span className="raleway text-xs text-gray-400 font-normal">
                2022
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="raleway text-xs text-gray-400 font-semibold">
                Trying out something fun which is cooking.
              </span>
              <span className="raleway text-xs leading-6">
                I find it interesting to create something out of what is
                available and I thought of creating a cooking app that can help
                people decide what to cook for the day. The idea is to list your
                currently available ingredients, and the application will
                recommend a recipe for you and will also give out calorie
                information. It sounds plain and all since that's it but the
                idea would be for it to tailor fit it to the type of ingredients
                you have in your kitchen. I'm still thinking about how I can
                make this project more fun and interactive.
              </span>
            </div>
          </div>
        </div>
        <div className="image-container flex items-center justify-center overflow-hidden bg-gray-50 rounded border">
          <Image
            src="/assets/phone-blank.png"
            alt="blank mock"
            width={600}
            height={600}
            quality={100}
            className="image-me  rounded-lg m-20 mt-10 mb-10"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </section>
    </main>
  );
};

export default Wha2cook;
