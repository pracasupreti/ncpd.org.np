"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/carousel/ncpd-conference-2019-session.jpg",
    title: "1ST NATIONAL PHILANTHROPY AND FUNDRAISING CONFERENCE",
    button: "Read More",
  },
  {
    image: "/carousel/ncpd-conference-kathmandu-2019-Inagu.jpeg",
    title:
      "1ST NATIONAL PHILANTHROPY AWARD PROVIDED TO MAYOR VAYAS MUNICIPALITY AND BEHALF OF THE ANCIENT PHILANTHROPIST GHASI (GRASSCUTTER).",
    button: "Read More",
  },
  {
    image: "/carousel/what-is-philanthropy-bekay-ahn.jpg",
    title: "PROF. BEKAY AHN PRESENTING ON THE GLOBAL PHILANTHROPY TRENDS AND PRACTICES.",
    button: "Read More",
  },
  {
    image: "/carousel/Networking-Among-Philanthropy-Actors-Nepal.jpg",
    title: "OFFERING NETWORKING OPPORTUNITIES FOR PHILANTHROPY ACTORS.",
    button: "Read More",
  },
  {
    image: "/carousel/ncpd-certified-campaign-manager-certification-distribution-program.jpeg",
    title: "CERTIFIED FUND RAISING SPECIALIST (CFRS).",
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
    <div className="relative w-full h-screen pt-[80px] overflow-hidden">
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
          
          {/* --- START: Added gradient overlay --- */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent [background-position:left_0_center] [background-size:150%_100%] pointer-events-none"></div>
          {/* --- END: Added gradient overlay --- */}

          <div className="absolute top-[70%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-primary text-left px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
              {slide.title}
            </h2>
            <button className="mt-6 px-6 py-2 bg-[#0ea5e9] rounded-full border-2 border-[#0ea5e9] text-white transition hover:bg-transparent hover:text-[#0ea5e9] cursor-pointer">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#253cb0] w-6 h-2"
                : "bg-white hover:bg-green-400 w-3 h-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
