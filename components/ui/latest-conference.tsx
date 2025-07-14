"use client";
import React from "react";
import Image from "next/image";

export default function LatestConferencePage() {
  return (
     <div className="bg-white font-sans text-gray-800 p-4 lg:py-12 lg:px-2">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-black">
              Latest Conference
            </h2>
          </div>
    
          {/* Conference Card */}
          <main className="flex justify-center">
            <div className="w-full max-w-7xl overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 px-2 lg:px-12 py-6">
              <div className="lg:w-220 relative h-64 lg:h-auto rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
                <Image
                  src="/home/ncpd-first-national-funraising-conference.png"
                  alt="Certified Fund Raising Specialist Training"
                  layout="fill"
                  // objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
    
              {/* Details */}
              <div className="lg:w-180 flex flex-col justify-center gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                  1st National Philanthropy and Fundraising Conference
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-semibold">Date:</span> July 1, 2019
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <ul className="list-disc">
                    <li>Philanthropy and NGOs require insights, knowledge, tools, and</li>
                    <li>skills to meet the resources including funding for creating</li>
                    <li>impact and sustaining themselves.</li>
                  </ul></p>
                <a
                  href="/1st-national-philanthropy-and-fundraising-conference"
                  className="mt-4 inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-base font-medium tracking-wide hover:bg-gray-300 transition-colors duration-300 w-fit"
                >
                  View More
                </a>
              </div>
            </div>
          </main>
    
          {/* All Trainings Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/conferences"
              className="bg-primary text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-secondary"
            >
              View all conferences
            </a>
          </div>
        </div>
  );
}

