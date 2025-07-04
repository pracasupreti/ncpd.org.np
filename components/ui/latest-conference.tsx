"use client";
import React from "react";
import Image from "next/image";

export default function LatestConferencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans text-gray-800 p-4 sm:p-6 lg:py-20 lg:px-26">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
          🎤 Latest Conference
        </h1>
        <a
          href="/conferences"
          className="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-5 py-2 rounded-full transition-all duration-300 text-base font-semibold"
        >
          View All Conferences
        </a>
      </header>

      {/* Training Card */}
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
