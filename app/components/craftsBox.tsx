"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type CraftsBoxProps = {
  imageSrc: string;
  title: string;
  subTitle?: string;
  subTitle2?: string;
  date: string;
  imageWidth: number;
  imageHeight: number;
  pageLink: string;
};

const CraftsBox: React.FC<CraftsBoxProps> = ({
  imageSrc,
  imageWidth,
  imageHeight,
  title,
  subTitle,
  subTitle2,
  date,
  pageLink,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Link href={pageLink} className="">
        <motion.div
          className="image-contain p-5 rounded border flex items-center justify-center hover:cursor-pointer"
          whileHover={{
            scale: 1.01,
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          }}
        >
          {/* THIS IMAGE SHOULD BE A PROP */}
          <Image
            src={imageSrc}
            alt="Craft Image"
            width={imageWidth}
            height={imageHeight}
            priority
            quality={100}
            className="image-me rounded-lg"
          />
        </motion.div>
      </Link>
      <div className="craft-title p-2 flex">
        <div className="flex flex-col">
          <span className="raleway text-lg font-semibold">{title}</span>
          <span className="raleway text-lg text-gray-400 font-semibold">
            {subTitle}
          </span>
          <span className="raleway text-sm text-gray-400 font-normal">
            {subTitle2}
          </span>
        </div>
        <span className="raleway text-gray-400 ml-auto">{date}</span>
      </div>
    </div>
  );
};

export default CraftsBox;