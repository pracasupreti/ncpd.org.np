"use client";

import Image from "next/image";
import React from "react";

const BekayAhnProfile: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10 pt-30">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
        Mr. Bekay Ahn
      </h1>
      <p className="text-sm text-blue-600 mb-6 font-medium">
        CFRE(Certified Fund Raising Executive)
      </p>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src="/training/Bekay Ahn.jpg"
            alt="Bekay Ahn"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 text-gray-800 space-y-4 text-sm md:text-base">
          <p>

            BekayAhn has been working in the nonprofit sector for twenty-five years as an author, lecturer, teacher, speaker and fundraising consultant.
          </p>
          <p>
            He is the Founder & Principal of the International Council for Non-Profit Management (ICNPM) where he provides strategic counsel to not-for-profit and corporate clients, primarily in the areas of organizational development, team building, philanthropy, strategic planning, and not-for-profit management and board leadership. He has helped nonprofits raise hundreds of millions of dollars over the length of his career. Bekay has founded and initiated organizations and institutions, including the Honor Society of Charity of Korea, Asia Philanthropy Awards (APA), Society of Philanthropy (SOP). He has been called the most prolific writer and speaker on philanthropy and development subjects in Asia. Bekay holds a Masters and majored in Engineering at the Ph.D. program at the University of Texas at Arlington. Named Outstanding Fundraising Speaker of the Year (2008) by the Association of Fundraising Professionals.
          </p>
          <p>
            He is listed in Who’s Who in Fund Raising and Philanthropy. Bekay teaches the CFRE course that certifies professional fundraisers. He is currently a leading faculty member teaching Philanthropy and Fundraising at Hanyang University in Seoul, Korea. Bekay has published six books: Fundraising Strategy for NPO, Fundraising Strategy for NPO (2nd Edition), The Power of Listening for Fundraisers, The Secret of Asking, Pandora’s Box, The New Wave of Philanthropy,  and The Theory of Philanthropy Industry.</p>
        </div>
      </div>
    </section>
  );
};

export default BekayAhnProfile;
