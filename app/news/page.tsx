"use client";
import React from "react";

const newsItems = [
  {
    title: "Workshop on SDG Progress Review",
    date: "23 May 2024",
    image: "/news/sdg-review.png",
  },
  {
    title: "Philanthropy in Nepal",
    date: "23 May 2024",
    image: "/news/nonprofit.jpg",
  },
  {
    title: "Fundraising Training for Non Profit Organizations Held in Kathmandu",
    date: "03 Aug 2020",
    image: "/news/fundraising-training.jpg",
  },
  {
    title: "Certified Fund Raising Specialist (CFRS) Training of Trainers kicked off",
    date: "03 Aug 2020",
    image: "/news/cfrs-training.jpg",
  },
  {
    title: "Interaction Between Disability Activists and Korean Philanthropist Held",
    date: "03 Aug 2020",
    image: "/news/disability-korea.jpg",
  },
  {
    title: "Trend of Nepal's Foreign Aid Mobilization In Different Political Context",
    date: "03 Aug 2020",
    image: "/news/foreign-aid.jpg",
  },
  {
    title: "Donating Properties, and Selling Medals for fundraising and sustainability of National Innovation Center in Nepal",
    date: "03 Aug 2020",
    image: "/news/nic-fundraising.jpg",
  },
  {
    title: "Philanthropy and Fundraising Conference Successfully Held in Nepal",
    date: "03 May 2019",
    image: "/news/fundraising-conference.jpg",
  },
  {
    title: "1st National Philanthropy and Fundraising Conference in Nepal",
    date: "03 May 2019",
    image: "/news/national-conference.png",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
      {/* Header Spacer */}
      <header className="py-3 pt-36 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-2">News</h1>
          <p className="text-base text-gray-600 text-left">Home / News</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-auto">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}