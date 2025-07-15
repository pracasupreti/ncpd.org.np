"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WhatWeDoPage: React.FC = () => {
  const features = [
    {
      title: "Empowering Philanthropy",
      description:
        "We build the capacity of philanthropy, private sectors, and individuals through training, conference, seminars, workshop, coaching, mentoring and networking.",
      image: "/whatwedo/education.png",
      link: "/empowering-philanthropy",
    },
    {
      title: "Dialogue For Philanthropy Infrastructure",
      description:
        "We dialogue and advocate for enabling environment; integrated societal norms, policies and infrastructure that fosters philanthropy in Nepal.",
      image: "/whatwedo/consulting.png",
      link: "/dialogue-for-philanthropy-infrastructure",
    },
    {
      title: "Strengthen Networks",
      description:
        "We connect key stakeholders to foster synergies – both within Nepal and globally, so that the power of human connections can nurture a better future for all.",
      image: "/whatwedo/conferences.png",
      link: "/strengthening-networks",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
        What We Do?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 leading-snug">
                {item.title}
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base mb-6">
              {item.description}
            </p>

            <a
              href={item.link}
              className="inline-block text-primary font-semibold text-sm sm:text-base"
            >
              <div className="flex">
              Read more <ArrowRight className="ml-2 h-6 w-6 bg-primary text-white rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-0" />
              </div>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WhatWeDoPage;
