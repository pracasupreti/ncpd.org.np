"use client";
import React, { useState } from "react";
import Image from "next/image";

interface NewsItem {
    title: string;
    date: string;
    image: string;
}

const newsData: NewsItem[] = [
    {
        title: "Workshop on SDG Progress Review",
        date: "23 May 2024",
        image: "/images/sdg.jpg",
    },
    {
        title: "Philanthropy in Nepal",
        date: "23 May 2024",
        image: "/images/philanthropy.jpg",
    },
    {
        title: "Fundraising Training for Non Profit Organizations Held in Kathmandu",
        date: "03 Aug 2020",
        image: "/images/fundraising.jpg",
    },
    {
        title: "Inclusive Education Conference 2024",
        date: "15 Jun 2024",
        image: "/images/education.jpg",
    },
    {
        title: "Disaster Relief Efforts Expanded",
        date: "10 Jul 2024",
        image: "/images/disaster.jpg",
    },
    {
        title: "Annual General Meeting Highlights",
        date: "01 May 2024",
        image: "/images/agm.jpg",
    },
];

const PAGE_SIZE = 3;

export default function LatestNewsPage() {
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil(newsData.length / PAGE_SIZE);

    const pagedNews = newsData.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

    return (
        <section className="w-full bg-gradient-to-br from-white via-blue-50 to-white py-12 px-4 sm:px-6 lg:px-24 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    📰 Latest News
                </h2>
                <a
                    href="/news"
                    className="text-sm sm:text-base text-blue-700 font-semibold hover:underline hover:text-blue-900 transition duration-300"
                >
                    All News →
                </a>
            </div>

            {/* News Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {pagedNews.map((news, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 opacity-100"
                    >
                        <div className="relative w-full h-52 md:h-64 lg:h-60">
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
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

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                            i === page ? "bg-green-500 w-8" : "bg-gray-400 w-2"
                        }`}
                        aria-label={`Go to page ${i + 1}`}
                        type="button"
                    ></button>
                ))}
            </div>
        </section>
    );
}
