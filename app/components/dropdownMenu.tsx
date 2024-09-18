"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const DropdownMenu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block w-min py-2 pr-4 text-xs cursor-pointer"
    >
      <span className="">Contents</span>
      <AnimatePresence>
        {isDropdownVisible && (
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 200 }} // Adjust maxHeight as needed
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
          >
            <div className="ml-5 mt-2 w-48 border-l">
              <motion.div
                className="flex flex-col pl-2 text-gray-500"
                initial={{ translateX: -20 }}
                animate={{ translateX: 0 }}
                transition={{ ease: "easeInOut", duration: 0.4 }}
              >
                <Link href="/ai-projects" className="w-fit">
                  <span className="inline-block w-full px-4 py-2 text-xs hover:opacity-50 cursor-pointer raleway">
                    AI projects
                  </span>
                </Link>
                <Link href="/interfaces" className="w-fit">
                  <span className="inline-block w-full px-4 py-2 text-xs hover:opacity-50 cursor-pointer raleway">
                    Bussiness Designs
                  </span>
                </Link>
                {/* <Link href="/error" className="w-fit">
                  <span className="inline-block w-full px-4 py-2 text-xs hover:opacity-50 cursor-pointer raleway">
                    Business Designs
                  </span>
                </Link> */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
