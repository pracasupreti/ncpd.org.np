"use client";
import Image from "next/image";
import LogoSection from "@/components/ui/logo";
import { MdCheckCircle } from "react-icons/md";

export default function ConferencesPage() {
  return (
    <div className="bg-white font-sans text-gray-800 px-4 pt-36 pb-24">
      {/* Header Section */}
      <header className="text-center mb-3">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-black">
          Conferences
        </h1>
      </header>

      {/* Breadcrumb */}
      <div className="text-center mb-12">
        <p className="text-blue-600 text-sm font-medium">Home / Conferences</p>
      </div>

      {/* Conference Card */}
      <main className="flex justify-center">
        <div className="w-full max-w-7xl overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 px-2 lg:px-12 py-6">
          {/* Image */}
          <div className="lg:w-[50%] relative h-64 lg:h-auto rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
            <Image
              src="/home/ncpd-first-national-funraising-conference.png"
              alt="Certified Fund Raising Specialist Training"
              layout="fill"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Details */}
          <div className="lg:w-[50%] flex flex-col justify-start gap-4">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-2 leading-tight">
              <span className="text-6xl font-extrabold text-blue-800">1</span>
              st National Philanthropy and Fundraising Conference
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Date:</span> February 27, 2019
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Venue:</span> Bhanimandal, Lalitpur, Nepal
            </p>

            <div className="flex items-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Image src="/home/chair.png" height={60} width={60} alt="Seats" />
                <div>
                  <span className="text-3xl text-primary font-bold">40</span>
                  <p className="text-gray-500 text-base">Seats</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-8">
                <Image src="/home/receipt.png" height={60} width={60} alt="Fees" />
                <div>
                  <span className="text-3xl text-primary font-bold">INGOs 17,000/-</span>
                  <p className="text-gray-500 text-base">Fees</p>
                </div>
              </div>
            </div>

            {/* List */}
            <ul className="space-y-4 text-sm mb-4">
              {[
                "Philanthropy and NGOs require insights, knowledge, tools, and skills to meet the resources including funding for creating impact and sustaining themselves.",
                "To introduce and aware on the existing opportunities of funding/resources for their CSOs.",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                      <MdCheckCircle size={20} />
                    </div>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-900 font-medium transition">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="/1st-national-philanthropy-and-fundraising-conference"
              className="inline-block px-8 py-3 rounded-xl text-base font-medium text-white bg-primary hover:bg-[#0d83b8] w-fit"
            >
              View More
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mt-20">
        <LogoSection />
      </div>
    </div>
  );
}
