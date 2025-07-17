"use client";
import React from "react";
import Image from "next/image";
import { MdCheckCircle, MdWarning } from "react-icons/md";

export default function LatestTrainingPage() {
  return (
    <div className="bg-white font-sans text-gray-800 p-2 py-4 lg:py-12 lg:px-2">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-black">
          Latest Training
        </h2>
      </div>

      {/* Training Card */}
      <main className="flex justify-center">
        <div className="w-full max-w-7xl overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 px-2 lg:px-12 py-6">
          <div className="lg:w-200 relative h-64 lg:h-auto rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden group">
            <Image
              src="/training/latest.jpeg"
              alt="Certified Fund Raising Specialist Training"
              layout="fill"
              // objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-0 bg-white opacity-20 group-hover:h-full transition-all duration-700 ease-in-out" />
  </div>
          </div>

          {/* Details */}
          <div className="lg:w-180 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-2">
              <span className="text-6xl font-extrabold text-blue-800">C</span>
              ertified Fund Raising Specialist (CFRS) – Training of Trainers (ToT)
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Date:</span> July 1, 2019
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3">
              Certificate Fund Raising Specialist (CFRS) Training of Trainers (ToT) is an intensive and internationally
              recognized professional fundraising course. It provides you the international as well as tailored
              knowledge, perspectives, tools and techniques and broadens the scope for a splendid fundraising career
              in the nonprofit world.
              It also enables you to raise fund for your organization in a competitive fundraising environment.</p>
            <div className="flex items-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Image src="/home/chair.png"
                  height={50}
                  width={50} alt={""} 
                  className="rounded-2xl border-2 border-primary p-2" />
                <div>
                  <span className="text-3xl text-primary font-bold ">20</span>
                  <p className="text-gray-500 text-base">Seats</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-8">
                <Image src="/home/receipt.png"
                  height={50}
                  width={50} alt={""} 
                  className="rounded-2xl border-2 border-primary p-2" />
                <div>
                  <span className="text-3xl text-primary font-bold ">NRS 14500/-</span>
                  <p className="text-gray-500 text-base">Fees</p>
                </div>
              </div>
            </div>
            {/* List */}
            <ul className="space-y-4 text-sm mb-4">
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                    <MdCheckCircle size={20} />
                  </div>
                </div>
                <p className="text-gray-700 group-hover:text-gray-900 font-medium transition">
                  Current and prospective donor research
                </p>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                    <MdCheckCircle size={20} />
                  </div>
                </div>
                <p className="text-gray-700 group-hover:text-gray-900 font-medium transition">
                  Building and sustaining a relationship with donors
                </p>
              </li>
            </ul>

            <a
              href="/certified-fund-raising-specialist-cfrs-training-of-trainers-tot"
              className="relative inline-block px-8 py-3 rounded-xl text-base font-medium text-white bg-primary w-fit overflow-hidden group"
            >
              <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left z-0"></span>
              <span className="relative z-10">View More</span>
            </a>

          </div>
        </div>
      </main>

      {/* All Trainings Button */}
      <div className="flex justify-center mt-8">
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
