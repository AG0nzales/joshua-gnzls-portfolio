import React from "react";
import Image from "next/image";

const Aweqfy = () => {
  return (
    <main className="">
      <div className="image-contain bg-gray-100 flex items-center justify-center">
        <Image
          src="/assets/aweqfy.png"
          alt="Aweqfy"
          width={800}
          height={800}
          quality={100}
          className="image-me rounded-lg m-20 mt-24 mb-24"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="border-b">
        <section className="p-10 flex items-start justify-center bg-gray-50 ">
          <div className="w-full max-w-4xl space-y-6 overflow-y-auto">
            <div className="w-full flex flex-col gap-8">
              <div className="title-container flex flex-col gap-5">
                <span className="raleway text-3xl font-semibold sm:text-lg lg:text-5xl">
                  Awesome Queuing System (AweQfy)
                </span>
                <span className="raleway text-sm text-gray-400 font-semibold">
                  An awesome queuing system for the modern world eliminating the
                  need for manual labor and long waiting times.
                </span>
              </div>
            </div>
            <div className="contexts-section pb-16">
              <hr className="border border-gray-200 opacity-50 w-full mt-14 mb-5" />

              <span className="raleway text-sm">
                This project is a product of our Internship at Awesome CX, a BPO
                company in Davao City. The project aims to create a queuing
                system that will eliminate the need for manual labor and long
                waiting times. The system is used by the company for applicants
                to be guided on when it is their turn and to which room they
                should go to.
              </span>
              <hr className="border border-gray-200 opacity-50 w-full mt-14 mb-5" />

              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5 sm:gap-5 lg:gap-10">
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">
                    Timeline
                  </span>
                  <span className="raleway text-xs">Jan - Apr 2023</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">Team</span>
                  <span className="raleway text-xs">2 Frontend Engineers</span>
                  <span className="raleway text-xs">1 Backend Engineer</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">
                    Technology
                  </span>
                  <span className="raleway text-xs">React</span>
                  <span className="raleway text-xs">Firebase</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="raleway text-sm font-semibold">
                    Language
                  </span>
                  <span className="raleway text-xs">Typescript</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Aweqfy;
