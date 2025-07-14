"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface NewsItem {
  title: string;
  date: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    title: "Workshop on SDG Progress Review",
    date: "23 May 2024",
    image: "/home/Workshop on SDGs progress Review .jpg",
  },
  {
    title: "Philanthropy in Nepal",
    date: "23 May 2024",
    image: "/carousel/what-is-philanthropy-bekay-ahn.jpg",
  },
  {
    title: "Fundraising Training for Non Profit Organizations Held in Kathmandu",
    date: "03 Aug 2020",
    image: "/home/Fundraising.jpeg",
  },
  {
    title: "Certified Fund Raising Specialist (CFRS) Training of Trainers kicked off",
    date: "03 Aug 2020",
    image: "/home/Certified.jpeg",
  },
  {
    title: "Interaction Between Disablities Activists and Korean Philanthropists Held",
    date: "03 Aug 2020",
    image: "/home/Interaction Between Disability Activists and Korean Philanthropist Held.jpg",
  },
  {
    title: "Trend of Nepal Forein Aid Mobilization in different political context",
    date: "03 Aug 2020",
    image: "/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg",
  },
];

const PAGE_SIZE = 3;

export default function LatestNewsPage() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(newsData.length / PAGE_SIZE);
  const pagedNews = newsData.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-white py-12 px-4 sm:px-6 lg:px-4 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
          Latest News
        </h2>
      </div>

      {/* News Cards */}
      <div className="overflow-hidden mt-4 max-w-7xl mx-auto py-4">
        <div className="flex gap-6 animate-scrollnews pause-scroll w-max">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden min-w-[300px] sm:min-w-[350px] lg:min-w-[380px] group"
            >
              <div className="relative w-full h-52 md:h-64 lg:h-60 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white text-lg font-semibold leading-snug line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">{news.date}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>


      {/* All Trainings Button */}
      <div className="flex justify-center mt-10">
        <a
          href="/trainings"
          className="bg-blue-600 hover:bg-secondary text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          All News
        </a>
      </div>
    </section>
  );
}
