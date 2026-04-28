"use client";

import React from "react";
import { Link } from "react-aria-components";

type ProjectCardProps = {
  title: string;
  description: string;
  subtitle: string;
  date: string;
  pageLink: string;
};

const ProjectCard = ({
  title,
  description,
  subtitle,
  date,
  pageLink,
}: ProjectCardProps) => {
  const gradientColors = [
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600",
    "from-green-400 to-green-600",
    "from-orange-400 to-orange-600",
    "from-pink-400 to-pink-600",
    "from-cyan-400 to-cyan-600",
  ];

  const colorIndex = (title.length + date.length) % gradientColors.length;

  return (
    <Link href={pageLink} className="block group focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 focus:ring-offset-white/50 rounded-2xl">
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-black/10 overflow-hidden hover:shadow-2xl hover:shadow-black/15 transition-all hover:scale-[1.02] h-full">
        <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[colorIndex]} opacity-90`} />
          <div className="relative z-10 text-white text-6xl font-bold raleway drop-shadow-lg">
            {title.charAt(0)}
          </div>
        </div>
        <div className="p-6 bg-white/30">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold raleway">{title}</h3>
            <span className="text-sm text-gray-600 raleway bg-black/5 px-2 py-1 rounded-md border border-white/30">{date}</span>
          </div>
          <p className="text-gray-700 raleway mb-3 font-medium">{subtitle}</p>
          <p className="text-sm text-gray-600 raleway leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
