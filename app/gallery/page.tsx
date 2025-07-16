"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoSection from "@/components/ui/logo";

interface GalleryItem {
  id: string;
  title: string;
  imageSrc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Certified Fund Raising Specialist (CFRS) Training",
    imageSrc: "/gallery/cfrs.jpg",
  },
  {
    id: "2",
    title: "Keys to Fundraising Success and Capacity Building",
    imageSrc: "/gallery/keys.jpg",
  },
  {
    id: "3",
    title: "1st National Philanthropy and Fundraising Conference",
    imageSrc: "/gallery/conference.jpg",
  },
];

const GalleryPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<GalleryItem>(galleryItems[0]);

  const openModal = (item: GalleryItem) => {
    setActiveImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white pt-40 pb-24 px-4 font-inter">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">Gallery</h1>
      </div>

      {/* Breadcrumb */}
      <div className="text-center mb-12 text-sm font-medium text-blue-600">
        <a href="/" className="hover:text-blue-800 transition-colors">Home</a>
        <span className="mx-1">/</span>
        <span>Gallery</span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="cursor-pointer"
          >
            <div className="w-72 h-48 relative overflow-hidden rounded-xl shadow-md">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="text-center text-blue-600 text-sm font-semibold mt-2 w-72">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 w-[90%] max-w-5xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Large image */}
            <div className="w-full h-96 relative rounded-xl overflow-hidden mb-6">
              <Image
                src={activeImage.imageSrc}
                alt={activeImage.title}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            {/* Thumbnail previews */}
            <div className="flex flex-wrap justify-center gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className={`cursor-pointer border-2 rounded-lg overflow-hidden w-36 h-24 relative transition-all duration-200 ${
                    item.id === activeImage.id ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Footer Logo */}
      <div className="mt-24">
        <LogoSection />
      </div>
    </div>
  );
};

export default GalleryPage;
