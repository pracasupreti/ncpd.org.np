"use client";

import Image from "next/image";
import React from "react";

const AliyahProfile: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10 pt-30">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
        Ms. Aliyah Karen
      </h1>
      <p className="text-sm text-blue-600 mb-6 font-medium">
        Fundraising Trainer, and Speaker Malaysia
      </p>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src="/training/Aliyah Karen.jpg"
            alt="Aliyah Karen"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 text-gray-800 space-y-4 text-sm md:text-base">
          <p>

            Aliyah Karen is Ph.D from International Royal Academy of United Nations and MBA in Human Resources Management from Nottingham Trent UK.  She is heading the Medicare Charitable Foundation from last 21 years which runs two charitable arms; the Heart Charity Fund and the Kidney Charity Fund in Malaysia.
             </p>
          <p>
            Karen has spoken in numerous prestigious conferences and also raised more than RM50 million. She is also awarded with numerous prestigious awards from across the world and recently awarded with the Most Inspiring Woman Icon and Malaysian Biz Woman Icon 2019.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Full Bio</button>
            </div>
      </div>
    </section>
  );
};

export default AliyahProfile;
