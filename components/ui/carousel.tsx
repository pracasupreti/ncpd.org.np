"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/img1.jpg",
    title: "OFFERING NETWORKING OPPORTUNITIES FOR PHILANTHROPY ACTORS",
    button: "Read More",
  },
  {
    image: "/img2.jpg",
    title: "EMPOWERING COMMUNITIES THROUGH COLLABORATION",
    button: "Read More",
  },
  {
    image: "/img3.jpg",
    title: "BUILDING STRONGER CONNECTIONS FOR IMPACT",
    button: "Read More",
  },
  {
    image: "/img4.jpg",
    title: "FOSTERING PARTNERSHIPS FOR SUSTAINABLE DEVELOPMENT",
    button: "Read More",
  },
  {
    image: "/img5.jpg",
    title: "CREATING CHANGE THROUGH NETWORKED ACTION",
    button: "Read More",
  },
];

const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Manual slide change
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
            priority
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
              {slide.title}
            </h2>
            <button className="mt-4 px-6 py-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full border border-white text-white transition">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-500 w-6 h-2"
                : "bg-white w-3 h-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
