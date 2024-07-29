import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./dropdownMenu";

const SideNav = () => (
  <div className="">
    <div className="hidden lg:block max-w-lg:block sm:hidden max-w-sm:hidden">
      <div className="w-60 overflow-hidden bg-white-200 border-r h-screen">
        <div className="p-8 px-6 border-b">
          <div className="flex flex-col gap-5 justify-between ">
            <Link href="/" className="w-full">
              <span className="w-full">
                <Image
                  src="/assets/name2.png"
                  alt="Joshua Andre Gonzales"
                  priority
                  width={80}
                  height={80}
                />
              </span>
            </Link>
            <div className="flex flex-col gap-3 mt-5">
              <span className="text-xl font-semibold hover:text-gray-400 raleway w-min">
                <Link href="/about">About</Link>
              </span>
              <span className="text-xl font-semibold hover:text-gray-400 raleway w-min">
                <Link href="/ideas">Ideas</Link>
              </span>
              <span className="text-xl font-semibold hover:text-gray-400 raleway w-min">
                <Link href="/cv">CV</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-b">
          <div className="flex flex-col space-y-2 w-fit mb-5">
            <span className="inline-block text-gray-400 w-full py-2 pr-4 text-xs raleway font-semibold tracking-[0.2em]">
              FEATURED
            </span>
            <Link href="/cnltk" className="w-fit">
              <span className="inline-block w-min text-xs hover:opacity-50">
                Cnltk
              </span>
            </Link>
            <Link href="/aweqfy" className="w-fit">
              <span className="inline-block w-min text-xs hover:opacity-50">
                AweQfy
              </span>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 w-fit">
            <span className="inline-block text-gray-400 w-full py-2 pr-4 text-xs raleway font-semibold tracking-[0.2em]">
              WEB INTERFACES
            </span>
            <div className="dropdown-continer">
              <DropdownMenu />
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-b">
          <div className="flex flex-col space-y-2 w-fit">
            <span className="inline-block w-full text-gray-400 py-2 pr-4 text-xs raleway font-semibold tracking-[0.2em]">
              CONTACT
            </span>
            <div className="group w-min">
              <a
                href="mailto:gonzalesjoshdre@gmail.com"
                className="inline-block w-min py-2 text-xs hover:opacity-50 cursor-pointer raleway"
              >
                Mail
              </a>
              <Link
                href="https://www.linkedin.com/in/joshua-andre-gonzales"
                target="_blank"
                className="inline-block w-min py-2 text-xs hover:opacity-50 cursor-pointer raleway"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.github.com/AG0nzales"
                target="_blank"
                className="inline-block w-min py-2 text-xs hover:opacity-50 cursor-pointer raleway"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="phone-navigation fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 block sm:block max-w-sm:block lg:hidden max-w-lg:hidden">
      <div className="flex items-center gap-5 justify-between p-4">
        <Link href="/">
          <Image
            src="/assets/name2.png"
            alt="Joshua Andre Gonzales"
            priority
            width={60}
            height={60}
          />
        </Link>
        <div className="flex items-center gap-8 py-1">
          <span className="text-lg font-semibold raleway">
            <Link href="/about">About</Link>
          </span>
          <span className="text-lg font-semibold raleway">
            <Link href="/ideas">Ideas</Link>
          </span>
          <span className="text-lg font-semibold raleway">
            <Link href="/cv">CV</Link>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default SideNav;
