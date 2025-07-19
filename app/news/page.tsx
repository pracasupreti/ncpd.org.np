"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  imageSrc: string;
  date: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Workshop on SDG Progress Review",
    imageSrc: "/news/sdg-workshop.png",
    date: "23 May 2024",
    href: "#",
  },
  {
    id: "2",
    title: "Philanthropy in Nepal",
    imageSrc: "/news/nonprofit.jpg",
    date: "23 May 2024",
    href: "#",
  },
  {
    id: "3",
    title: "Fundraising Training for Non-Profit Organizations Held in Kathmandu",
    imageSrc: "/news/kathmandu-training.jpg",
    date: "03 Aug 2020",
    href: "#",
  },
  {
    id: "4",
    title: "Certified Fund Raising Specialist (CFRS) Training of Trainers kicked off",
    imageSrc: "/news/cfrs-tot.jpg",
    date: "03 Aug 2020",
    href: "#",
  },
  {
    id: "5",
    title: "Interaction Between Disability Activists and Korean Philanthropist Held",
    imageSrc: "/news/disability-korea.jpg",
    date: "03 Aug 2020",
    href: "#",
  },
  {
    id: "6",
    title: "Trend of Nepal's Foreign Aid Mobilization In Different Political Context",
    imageSrc: "/news/foreign-aid.jpg",
    date: "03 Aug 2020",
    href: "#",
  },
  {
    id: "7",
    title: "Donating Properties and Selling Medals for Fundraising at National Innovation Center",
    imageSrc: "/news/nic-donation.jpg",
    date: "03 Aug 2020",
    href: "#",
  },
  {
    id: "8",
    title: "Philanthropy and Fundraising Conference Successfully Held in Nepal",
    imageSrc: "/news/conference-success.jpg",
    date: "03 May 2019",
    href: "#",
  },
  {
    id: "9",
    title: "1st National Philanthropy and Fundraising Conference in Nepal",
    imageSrc: "/news/conference-first.png",
    date: "03 May 2019",
    href: "#",
  },
];

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-36 pb-20 px-4 font-inter">
      {/* Page Header */}
      <div className="text-center mb-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black">News</h1>
      </div>

      {/* Breadcrumb */}
      <div className="text-center mb-12 text-sm font-medium text-blue-600">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-1">/</span>
        <span>News</span>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsItems.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="group relative block overflow-hidden rounded-lg transition-transform hover:scale-[1.01]"
          >
            <div className="relative w-full h-56 sm:h-60 md:h-64">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-base sm:text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
