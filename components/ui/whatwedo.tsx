"use client";
import React from "react";
import Image from "next/image";

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
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
        What We Do?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4 mb-4">
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
              className="inline-block text-green-600 font-semibold hover:text-green-800 text-sm sm:text-base transition-all duration-300"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoPage;
