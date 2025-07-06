"use client";
import React from "react";

const galleryItems = [
  {
    title: "Certified Fund Raising Specialist (CFRS) Training",
    image: "/gallery/certified.jpg",
  },
  {
    title: "Keys to Fundraising Success and Capacity Building",
    image: "/gallery/keys.jpg",
  },
  {
    title: "1st National Philanthropy and Fundraising Conference",
    image: "/gallery/first.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
      {/* Header */}
      <header className="py-3 pt-36 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-2">Gallery</h1>
          <p className="text-base text-gray-600 text-left">Home / Gallery</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
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

              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}