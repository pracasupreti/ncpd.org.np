"use client";
import React from "react";
import Image from "next/image";
import LogoSection from "@/components/ui/logo";
import { MdCheckCircle } from "react-icons/md";

interface Training {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
  venue: string;
  seats: number;
  fee: string;
  description?: string[];
}

const trainings: Training[] = [
  {
    id: "/certified-fund-raising-specialist-cfrs-training-of-trainers-tot",
    imageSrc: "/training/latest.jpeg",
    title: "Certified Fund Raising Specialist (CFRS) Training of Trainers (ToT)",
    date: "July 1, 2019",
    venue: "Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal",
    seats: 20,
    fee: "NRS 14,500/-",
    description: [
      "Current and prospective donor research",
      "Building and sustaining a relationship with donors",
    ],
  },
  {
    id: "/keys-to-fundraising-success-and-capacity-building",
    imageSrc: "/training/key-to-fundraising.png",
    title: "Keys to Fundraising Success and Capacity Building",
    date: "June 10, 2019",
    venue: "Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal",
    seats: 25,
    fee: "NRS 12,000/-",
    description: [
      "Donor management - how do you retain existing donors and identify new ones?",
      "Story telling. How do you showcase your INGO/ NGO?",
      "Small and Big Fundraising ideas.",
      "Using PR and Social Media to Brand your INGO / NGO. How donors react and what do they want?",
    ],
  },
];

const TrainingsPage: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800 pt-40 pb-24 px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black">Trainings</h2>
      </div>

     {/* Breadcrumb */}
      <div className="text-center mb-12 text-sm font-medium text-blue-600">
        <a href="/" className="hover:text-blue-800 transition-colors">Home</a>
        <span className="mx-1">/</span>
        <span>Trainings</span>
      </div>

      {/* Training List */}
      <main className="flex flex-col items-center mt-10 space-y-28">
        {trainings.map((training) => (
          <div
            key={training.id}
            className="w-full max-w-7xl flex flex-col lg:flex-row gap-10"
          >
            {/* Stretched Image */}
            <div
              className={`lg:w-[50%] h-64 lg:h-[400px] rounded-2xl overflow-hidden bg-gray-200 relative
                ${training.title === "Keys to Fundraising Success and Capacity Building" ? "mt-16" : ""}
                ${training.title === "Certified Fund Raising Specialist (CFRS) Training of Trainers (ToT)" ? "self-center" : ""}
              `}
            >
              <Image
                src={training.imageSrc}
                alt={training.title}
                fill
                className="object-fill rounded-2xl"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-[50%] flex flex-col justify-start gap-4">
              <h1 className="text-3xl font-extrabold text-blue-800 mb-2 leading-snug">
                <span className="text-5xl text-blue-800 font-extrabold mr-1">
                  {training.title.charAt(0)}
                </span>
                {training.title.slice(1)}
              </h1>

              <p className="text-gray-600 text-sm sm:text-base">
                <span className="font-semibold">Date:</span> {training.date}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                <span className="font-semibold">Venue:</span> {training.venue}
              </p>

              {/* Seats & Fees */}
              <div className="flex items-center gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <Image src="/home/chair.png" height={60} width={60} alt="Seats" />
                  <div>
                    <span className="text-3xl text-primary font-bold">{training.seats}</span>
                    <p className="text-gray-500 text-base">Seats</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-8">
                  <Image src="/home/receipt.png" height={60} width={60} alt="Fees" />
                  <div>
                    <span className="text-3xl text-primary font-bold">{training.fee}</span>
                    <p className="text-gray-500 text-base">Fees</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              {training.description && (
                <ul className="space-y-4 text-sm mb-4">
                  {training.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                          <MdCheckCircle size={20} />
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium">{desc}</p>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={training.id}
                className="inline-block px-8 py-3 rounded-xl text-base font-medium text-white bg-primary w-fit hover:bg-[#0d83b8]"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* Footer Logo */}
      <div className="mt-28">
        <LogoSection />
      </div>
    </div>
  );
};

export default TrainingsPage;
