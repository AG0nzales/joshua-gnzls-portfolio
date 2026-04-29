"use client";

import React from "react";
import { Link } from "react-aria-components";

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  date: string;
  pageLink: string;
  image?: string;
  technologies?: string[];
};

const ProjectCard = ({
  id,
  title,
  description,
  subtitle,
  date,
  pageLink,
  image,
  technologies = [],
}: ProjectCardProps) => {
  const isFeatured = id === 1 || id === 2;

  return (
    <Link
      href={pageLink}
      className="block group focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 focus:ring-offset-white/50 rounded-2xl"
    >
      <div className="bg-[#fcfbf8] backdrop-blur-xl rounded-2xl border-[1.5px] border-gray-300 shadow-xl shadow-black/10 overflow-hidden hover:shadow-2xl hover:shadow-black/15 transition-all hover:scale-[1.05] h-full duration-300">
        <div className="relative">
          <div className="relative w-full h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="max-w-[80%] max-h-[80%] object-contain"
              />
            ) : (
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            )}
          </div>

          <div className="absolute top-3 left-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm">
              <svg
                className="w-3.5 h-3.5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="text-xs font-medium text-gray-700 raleway">
                Web
              </span>
            </div>
          </div>

          <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full shadow-sm">
              <span className="text-xs font-medium text-gray-700 raleway">
                Full-Stack Development
              </span>
            </div>
            {isFeatured && (
              <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-400/90 backdrop-blur-sm rounded-full shadow-sm">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-xs font-semibold text-white raleway">
                  Featured
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 bg-white/30">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold raleway">{title}</h3>
            {/* <span className="text-sm text-gray-600 raleway bg-black/5 px-2 py-1 rounded-md border border-white/30">
              {date}
            </span> */}
          </div>
          <p className="text-gray-700 raleway mb-3 font-medium">{subtitle}</p>
          <p className="text-sm text-gray-600 raleway leading-relaxed mb-4">
            {description}
          </p>

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 bg-[#f5f0e6] text-gray-800 text-xs font-medium raleway rounded-full border border-[#e8dfd0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
