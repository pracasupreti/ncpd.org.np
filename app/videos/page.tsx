"use client";
import LogoSection from "@/components/ui/logo";
import React from "react";

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

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <div className="w-full max-w-sm bg-transparent">
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
    <h3 className="mt-4 text-center text-base font-semibold text-blue-700 leading-snug px-2">
      {video.title}
    </h3>
  </div>
);

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

      {/* Video Cards */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-24 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
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
