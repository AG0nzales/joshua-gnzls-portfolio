"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type CraftsBoxTwoProps = {
  imageSrc: string;
  imageSrcTwo: string;
  title: string;
  subTitle: string;
  date: string;
  imageWidth: number;
  imageHeight: number;
  imageWidthTwo: number;
  imageHeightTwo: number;
  pageLink: string;
};

const CraftsBoxTwo: React.FC<CraftsBoxTwoProps> = ({
  imageSrc,
  imageSrcTwo,
  imageWidth,
  imageHeight,
  imageWidthTwo,
  imageHeightTwo,
  title,
  subTitle,
  date,
  pageLink,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Link href={pageLink} className="">
        <motion.div
          className="image-contain p-1.5 rounded border flex flex-col gap-2 items-center justify-center hover:cursor-pointer group"
          whileHover={{
            scale: 1.01,
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          }}
        >
          {/* THIS IMAGE SHOULD BE A PROP */}
          <div className="rounded border p-5">
            <Image
              src={imageSrc}
              alt="Craft Image"
              width={imageWidth}
              height={imageHeight}
              priority
              quality={100}
              className="image-me rounded-lg"
            />
          </div>
          <div className="rounded border p-10">
            <Image
              src={imageSrcTwo}
              alt="Craft Image"
              width={imageWidthTwo}
              height={imageHeightTwo}
              priority
              quality={100}
              className="image-me rounded-lg"
            />
          </div>
        </motion.div>
      </Link>
      <div className="craft-title p-2 flex">
        <div className="flex flex-col">
          <span className="raleway text-lg font-semibold">{title}</span>
          <span className="raleway text-lg text-gray-400 font-semibold">
            {subTitle}
          </span>
        </div>
        <span className="raleway text-gray-400 ml-auto">{date}</span>
      </div>
    </div>
  );
};

export default CraftsBoxTwo;
