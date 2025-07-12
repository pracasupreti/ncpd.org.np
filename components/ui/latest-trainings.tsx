"use client";
import React from "react";
import Image from "next/image";

export default function LatestTrainingPage() {
  return (
    <div className="bg-white font-sans text-gray-800 p-4 sm:p-6 lg:py-20 lg:px-26">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-black">
          Latest Training
        </h2>
      </div>

      {/* Training Card */}
      <main className="flex justify-center">
        <div className="w-full max-w-5xl overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 py-6">
          <div className="lg:w-220 relative h-64 lg:h-auto rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
            <Image
              src="/training/latest.jpeg"
              alt="Certified Fund Raising Specialist Training"
              layout="fill"
              // objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          {/* Details */}
          <div className="lg:w-180 flex flex-col justify-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              Certified Fund Raising Specialist (CFRS) – Training of Trainers (ToT)
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Date:</span> July 1, 2019
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Certificate Fund Raising Specialist (CFRS) Training of Trainers (ToT) is an intensive and internationally
              recognized professional fundraising course. It provides you the international as well as tailored
              knowledge, perspectives, tools and techniques and broadens the scope for a splendid fundraising career
              in the nonprofit world.
              It also enables you to raise fund for your organization in a competitive fundraising environment.</p>
            <a
              href="/certified-fund-raising-specialist-cfrs-training-of-trainers-tot"
              className="mt-4 inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-base font-medium tracking-wide hover:bg-gray-300 transition-colors duration-300 w-fit"
            >
              View More
            </a>
          </div>
        </div>
      </main>

      {/* All Trainings Button */}
      <div className="flex justify-center mt-16">
        <a
          href="/trainings"
          className="bg-primary text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-secondary"
        >
          View all trainings
        </a>
      </div>
    </div>
  );
}
