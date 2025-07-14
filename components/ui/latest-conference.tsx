"use client";
import React from "react";
import Image from "next/image";

export default function LatestConferencePage() {
  return (
<<<<<<< HEAD
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
                  <ul className="list-disc text-gray-700 text-sm sm:text-base leading-relaxed">
                    <li>Philanthropy and NGOs require insights, knowledge, tools, and</li>
                    <li>skills to meet the resources including funding for creating</li>
                    <li>impact and sustaining themselves.</li>
                  </ul>
                <a
                  href="/1st-national-philanthropy-and-fundraising-conference"
                  className="mt-4 inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-base font-medium tracking-wide hover:bg-gray-300 transition-colors duration-300 w-fit"
                >
                  View More
                </a>
              </div>
=======
     <div className="bg-white font-sans text-gray-800 p-4 sm:p-6 lg:py-20 lg:px-26">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-black">
          Latest Training
        Latest Conference
        </h2>
        </div>


      <main className="flex justify-center">
        <div className="w-full max-w-5xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 rounded-3xl">
          
          {/* Image */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden group">
            <Image
              src="/home/ncpd-first-national-funraising-conference.png"
              alt="Certified Fund Raising Specialist Training"
              layout="fill"
              className="rounded-3xl lg:rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
            />
>>>>>>> 7a6eb1ab12c19117c1154387ac0ca5e3a2df1f54
            </div>

          {/* Details */}
          <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 leading-snug hover:text-blue-400">
              1st National Philanthropy and Fundraising Conference
            </h2>
            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base">
                <li>Philanthropy and NGOs require insights, knowledge, tools, and</li>
                <li>skills to meet the resources including funding for creating</li>
                <li>impact and sustaining themselves.</li>
            </ul>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">📅 Date:</span> July 1, 2019
            </p>
            <a
              href="/1st-national-philanthropy-and-fundraising-conference"
              className="mt-2 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-blue-900 transition-colors duration-300 w-fit"
            >
              View Details
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
