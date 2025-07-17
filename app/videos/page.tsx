"use client";
import LogoSection from "@/components/ui/logo";
import React, { useState, useRef, useEffect } from "react";
import { Send, Copy, Facebook, Twitter } from "lucide-react";

interface Video {
  id: string;
  title: string;
  embedUrl: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Brief documentary on Nepal's Philanthropy",
    embedUrl: "https://www.youtube.com/embed/4d51G464g5s",
  },
  {
    id: "2",
    title: "Message from Ms. Reem Abdelhamid",
    embedUrl: "https://www.youtube.com/embed/zbO_Daf1Low",
  },
  {
    id: "3",
    title: "Message from Professor Bekay Ahn",
    embedUrl: "https://www.youtube.com/embed/5BOq94N4pdU",
  },
];

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  const [showOptions, setShowOptions] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoUrl = video.embedUrl.replace("embed/", "watch?v=");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  const handleCopy = () => {
    navigator.clipboard.writeText(videoUrl);
    setShowOptions(false);
  };

  return (
    <div className="w-full max-w-sm flex flex-col justify-start relative">
      {/* Video */}
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-gray-200">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={video.embedUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Title + Share */}
      <div className="mt-4 px-2 flex flex-col items-center justify-between h-full">
        <h3 className="text-center text-base font-semibold text-blue-700 leading-snug mb-2 px-1 min-h-[3rem]">
          {video.title}
        </h3>

        <div className="relative" ref={modalRef}>
          <button
            onClick={() => setShowOptions(prev => !prev)}
            className="text-gray-600 hover:text-blue-600 transition-all"
            title="Share"
          >
            <Send className="w-5 h-5" />
          </button>

          {showOptions && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 shadow-lg rounded-md p-3 z-20 w-48">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 w-full mb-2"
              >
                <Copy className="w-4 h-4" /> Copy Link
              </button>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 w-full mb-2"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}&text=${encodeURIComponent(video.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 w-full"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const VideoGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col pt-40">
      {/* Header */}
      <header className="px-4 sm:px-8 lg:px-20 pb-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-2">
            Videos
          </h1>
          <nav className="text-sm text-blue-600 font-bold">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-1">/</span>
            <span className="text-blue-600">Video</span>
          </nav>
        </div>
      </header>

      {/* Fixed Alignment Layout */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-24 py-10">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
          {/* Left video */}
          <div className="flex justify-center w-full md:w-1/3">
            <div className="w-full h-full flex flex-col">
              <VideoCard video={videos[0]} />
            </div>
          </div>

          {/* Center and right videos */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center w-full md:w-2/3 items-stretch">
            <div className="w-full h-full flex flex-col">
              <VideoCard video={videos[1]} />
            </div>
            <div className="w-full h-full flex flex-col">
              <VideoCard video={videos[2]} />
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-16 bg-gray-50 py-8">
          <LogoSection />
        </div>
      </main>
    </div>
  );
};

export default VideoGalleryPage;
