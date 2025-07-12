"use client";
import Image from "next/image";
import { useState } from "react";

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
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans text-gray-800 p-4 sm:p-6 lg:px-26">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight">
                     Latest News
                </h2>
                <a 
                   href="/news"
                   className="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-5 py-2 rounded-full transition-all duration-300 text-base font-semibold"
                >
                View All News
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
